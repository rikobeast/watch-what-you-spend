import React, { useCallback, useMemo, useState } from 'react';
import { months } from 'data/monthsInAYear';
import { daysOfWeek } from 'data/daysOfweek';
import CalendarHeader from 'components/Calendar/CalendarHeader';
import CalendarDays from 'components/Calendar/CalendarDays';
import Card from 'components/Card';
import Day from 'components/Calendar/Day';
import { getBlankDays } from 'utils/getBlankDays';
import { setDayInformation } from 'utils/setDayInformation';
import { getNameOfSelectedDay } from 'utils/getNameOfSelectedDay';
import { getDaysInCurrentMonth } from 'utils/getDaysInCurrentMonth';
import { useEffect } from 'react';
import { FormInfoType } from 'types/Form.types';
import { Direction } from 'types/Direction.types';
import { ProductType } from 'types/Product.types';
import DetailedDayInformation from './Day/DetailedDayInformation';
import { calculateTotalPriceOfProducts } from 'utils/calculateTotalPriceOfProducts';

const Calendar: React.FC = (): JSX.Element => {
  const date = new Date();
  const today = date.getDate();
  const monthIndex = date.getMonth();
  const fullYear = date.getFullYear();
  const [currentMonthIndex, setCurrentMonthIndex] =
    useState<number>(monthIndex);
  const [currentFullYear, setCurrentFullYear] = useState<number>(fullYear);
  const [selectedDay, setSelectedDay] = useState<number>(today);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [expense, setExpense] = useState<number>(0);

  const daysInAMonth = useMemo(
    () => getDaysInCurrentMonth(currentFullYear, currentMonthIndex),
    [currentMonthIndex, currentFullYear]
  );

  const nameOfSelectedDay = useMemo(
    () => getNameOfSelectedDay(fullYear, currentMonthIndex, selectedDay),
    [selectedDay]
  );

  const blankDays = useMemo(
    () => getBlankDays(daysOfWeek, currentFullYear, currentMonthIndex),
    [currentMonthIndex]
  );

  const calendarDays = useMemo(
    () => setDayInformation(daysInAMonth),
    [daysInAMonth]
  );

  const monthName = useMemo(
    () => months[currentMonthIndex].name,
    [currentMonthIndex]
  );

  const totalPrice = useMemo(
    () => calculateTotalPriceOfProducts(calendarDays[selectedDay - 1].products),
    [calendarDays[selectedDay - 1].products]
  );

  const onMonthChange = useCallback(
    (direction: string) => {
      if (direction === Direction.PREVIOUS) {
        setCurrentMonthIndex(currentMonthIndex - 1);
      } else if (direction === Direction.NEXT) {
        setCurrentMonthIndex(currentMonthIndex + 1);
      } else {
        setCurrentMonthIndex(monthIndex);
        setSelectedDay(today);
        setCurrentFullYear(fullYear);
      }
      shouldChangeYear(direction);
    },
    [currentMonthIndex, currentFullYear, monthIndex, today, fullYear]
  );

  const shouldChangeYear = useCallback(
    (direction: string) => {
      if (direction === Direction.NEXT && currentMonthIndex === 11) {
        setCurrentFullYear(currentFullYear + 1);
        setCurrentMonthIndex(0);
      } else if (direction === Direction.PREVIOUS && currentMonthIndex === 0) {
        setCurrentFullYear(currentFullYear - 1);
        setCurrentMonthIndex(11);
      }
    },
    [currentMonthIndex, currentFullYear]
  );

  const onDaySelect = useCallback((dayNumber: number) => {
    setSelectedDay(dayNumber);
  }, []);

  const handleSubmit = useCallback(
    (formInfo: FormInfoType) => {
      const { productPrice, productName } = formInfo;

      setProducts((prevProducts) => {
        const newProduct = {
          id: calendarDays[selectedDay - 1].products.length + 1,
          name: productName.value,
          price: parseFloat(productPrice.value),
        };
        calendarDays[selectedDay - 1].products = [
          ...calendarDays[selectedDay - 1].products,
          newProduct,
        ];
        return [...prevProducts, newProduct];
      });

      const parsedValue = parseFloat(productPrice.value);

      setExpense(parsedValue + expense);

      calendarDays[selectedDay - 1].expense = parsedValue + expense;
    },
    [calendarDays, selectedDay, expense]
  );

  useEffect(() => {
    setExpense(calendarDays[selectedDay - 1].expense);
  }, [selectedDay]);

  return (
    <div className="h-screen sm:p-2 sm:flex sm:flex-row">
      <div className="wrapper">
        <div className="p-2 sm:p-0">
          <Card>
            <CalendarHeader
              monthName={monthName}
              dayNames={daysOfWeek}
              fullYear={currentFullYear}
              onMonthChange={onMonthChange}
            />
            <CalendarDays
              blankDays={blankDays}
              numberOfDays={calendarDays}
              activeDayIndex={selectedDay}
              onClick={onDaySelect}
            />
          </Card>
        </div>
        <div className="p-2 sm:p-0">
          <Card className="my-2">
            <Day
              number={selectedDay}
              name={nameOfSelectedDay}
              expense={calendarDays[selectedDay - 1].expense}
              onSubmit={handleSubmit}
            />
          </Card>
        </div>
      </div>
      <div className="sm:max-w-full">
        <DetailedDayInformation
          products={calendarDays[selectedDay - 1].products}
          total={totalPrice}
        />
      </div>
    </div>
  );
};

export default Calendar;
