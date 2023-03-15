import { render, screen, fireEvent } from '@testing-library/react';
import { composeStory } from '@storybook/testing-react';

// import your story from App.stories.js
import { Original } from './App.stories.js';

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library

const Default = composeStory(Original);

test('renders correctly originally without click', () => {
    render(<Default />);
    const button = screen.getByText("Click me!");
    expect(button).not.toBeNull();
});

test('renders correctly with click, click in test', () => {
    render(<Default />);
    const button = screen.getByText("Click me!");
    fireEvent.click(button);
    expect(screen.getByText("Thanks!")).not.toBeNull();
});