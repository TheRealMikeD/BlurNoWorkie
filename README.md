Example of a React Native project in which the blur event does not fire as expected.

When running this project, do the following to see the reported error behavior:
1. Press the "Go to Second Screen" link
2. Once on the second screen, press the back button in the navigation header to return to the first screen.
3. When navigating away from the second screen, the blur event listener should have fired. If the console output says, "[SecondScreen->useEffect->blur] blur listener fired," then the listener was fired. If not, then this is evidence that the listener did not fire.
