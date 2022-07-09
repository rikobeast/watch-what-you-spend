import Card from 'components/Card';
import React from 'react';

const DetailedDayInformation = () => {
  return (
    <Card className="mx-2" width="700px">
      <div className="flex flex-col p-1">
        <h1 className="text-sm sm:text-lg p-3 font-bold">
          Expenses for the selected day:
        </h1>
      </div>
    </Card>
  );
};

export default DetailedDayInformation;
