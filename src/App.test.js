import React from "react";
import { render, screen } from '@testing-library/react';
import ChooseTable from "./Components/ChooseTableForm";
import '@testing-library/jest-dom/extend-expect';
import { initializeTime } from "./App"
import { updateTime } from "./App";

jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div data-testid="swiper-testid">{children}</div>,
  SwiperSlide: ({ children }) => (
      <div data-testid="swiper-slide-testid">{children}</div>
  ),
}), {virtual:true});

jest.mock('swiper/modules', () => ({
  Autoplay: (props) => null,
  Pagination: (props) => null,
}), {virtual:true});

test('renders the ChooseTable heading', () => {
  const chooseTable = {
    date: '2023-12-20',
    time: '12:00',
    guests: '2',
    occasion: 'Birthday',
    selectedLocation: 'inside'
  };

  const handleTableChange = jest.fn();
  const handleLocationChange = jest.fn();
  const errorDate = null;
  const availableTime = ['12:00', '13:00', '14:00'];

  render(<ChooseTable
      chooseTable={chooseTable}
      handleTableChange={handleTableChange}
      handleLocationChange={handleLocationChange}
      errorDate={errorDate}
      availableTime={availableTime}
  />);
  const headingElement = screen.getByText("Choose your table");
  expect(headingElement).toBeInTheDocument();
});

describe("initializeTime", () => {
  it("returns an array of times", () => {
    const times = initializeTime();
    expect(Array.isArray(times)).toBe(true);
    expect(times).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });
});



describe('updateTime', () => {
  it('removes a reserved time from the state', () => {
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'reserved', time: '18:00' };
    const newTimes = updateTime(times, action);
    expect(newTimes).toEqual(['17:00', '19:00', '20:00', '21:00', '22:00']);
  });

  it('throws an error for an unknown action type', () => {
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'unknown', time: '18:00' };
    expect(() => updateTime(times, action)).toThrow('Unknown action: unknown');
  });
});