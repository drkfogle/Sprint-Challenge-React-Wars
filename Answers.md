# Answers

1.  What is React JS and what problems does it try and solve?

React is a library which allows the user the ability to be able to build large scale apps much faster. Created by the Facebook team, the library itself is allows for users to interact with the DOM with through the libraries own functions and manipulate it much easier and creating a much better experience for the user base.



1.  What does it mean to _think_ in react?

To think in React is to think of larger elements in the DOM as smaller components with a hierarchy behind them. You can manipulate the components from lower to higher, starting with the smaller elements to the larger ones or the reverse. You then look for any code that is capable of being edited, or in fact is supposed to be edited and these components should have their own time to be focused on. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A functional component is a function which accepts props as its argument, which is useful when a user wants to pass some properties around. Functional components also cannot have their own state therefore props must be used if the user wants to pass any data to any such component. On the other hand a Class component has their extends from the React.Component and is also capable of using the render function which allows the user to return function in order to return a react element. Class components can possess state therefore they are capable of having data they can pass around. 

1.  Describe state.

state is data which can be found in a functional component. It can be modified and accessed only when one uses the function that possesses that state. 

1.  Describe props.

Props are data that is passable from one component to the other. This is highly useful as we can pass the data to the parent components allowing them some mutable data.