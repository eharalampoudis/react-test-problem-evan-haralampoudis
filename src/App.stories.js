// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories

import App from "./App";

export default {
    title: 'App'
};

const Template = () => <App />

//Story of the original App
export const Original = Template.bind({});
