import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, VStack } from '@chakra-ui/react';
import { SingleDatepicker, RangeDatepicker } from '../src';
import { useState } from 'react';

const App = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    new Date(),
    new Date(),
  ]);
  return (
    <ChakraProvider>
      <VStack padding={'1em'} spacing={5} minHeight={'600px'}>
        <SingleDatepicker
          name="date-input"
          date={date}
          onDateChange={setDate}
        />
        <RangeDatepicker
          selectedDates={selectedDates}
          onDateChange={setSelectedDates}
        />
      </VStack>
    </ChakraProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
