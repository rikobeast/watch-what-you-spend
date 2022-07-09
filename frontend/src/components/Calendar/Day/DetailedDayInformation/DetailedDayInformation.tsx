import Card from 'components/Card';
import React from 'react';

const DetailedDayInformation = () => {
  return (
    <div className="p-2 sm:p-0">
      <Card className="sm:ml-2">
        <div className="flex flex-col p-2">
          <h1 className="text-sm text-lg text-center p-3 font-bold">
            Expenses for the selected day
          </h1>
        </div>
      </Card>
    </div>
  );
};

export default DetailedDayInformation;
