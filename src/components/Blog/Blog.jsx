import React from "react";

const Blog = () => {
  return (
    <div className="mt-5 lg:w-[90%]">
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Props Vs State</h2>
          <p>
            The shortened word for properties is "props." Data transmission
            between parent and child components is accomplished using these
            props. Because props are immutable, a child component cannot change
            them. Only the child component is capable of reading props. The
            primary purpose of it is component communication. State, a built-in
            feature in React, enables components to store dynamic data. The
            components can modify the state, which is mutable. State is used to
            keep track of information that could change over the course of a
            component's lifetime, such as user input, a countdown clock, or a
            list of items. React will automatically update the component's
            rendering when a component's state changes to reflect the new state.
          </p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl my-3">
        <div className="card-body">
          <h2 className="card-title">How does useState work?</h2>
          <p>
            In React functional components, state variables are created and
            managed using the useState() function. It accepts an initial value
            as an argument and outputs an array containing two values: the state
            variable's current value and a function that enables updating the
            state. As an illustration, useState() can be used as follows to keep
            track of a counter in a functional component:
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto whitespace-pre-line">
              <code className="">
                {`
            function Counter() {
              const [count, setCount] = useState(0);
            
              return (
                <div>
                  <p>You clicked {count} times</p>
                  <button onClick={() => setCount(count + 1)}>
                    Click me
                  </button>
                </div>
              );
            }
          `}
              </code>
            </pre>
            In the example above, we're using useState() to create a state
            variable called count with an initial value of 0. We're also using
            the setCount function returned by useState() to update the count
            variable every time the button is clicked.
          </p>
        </div>
      </div>

      <div className="card  bg-base-100 shadow-xl my-3">
        <div className="card-body">
          <h2 className="card-title">
            Purpose of useEffect other than fetching data
          </h2>
          <p>
            For DOM manipulation, event listeners, state updates, clean-up
            tasks, and integration with third-party libraries, React uses the
            useEffect hook. The DOM can be changed, event listeners can be added
            or removed, a component's state can be updated based on certain
            criteria, cleanup tasks can be carried out when a component
            unmounts, and it can be used to integrate with third-party libraries
            that need access to the component's state or props. In conclusion,
            the useEffect hook can be used to update the component's state, work
            with the DOM, or carry out clean-up tasks. It can be used for any
            operation that needs to be carried out after the component has
            rendered.
          </p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl my-3">
        <div className="card-body">
          <h2 className="card-title">How Does React work?</h2>
          <p>
            A JavaScript library called React is used to create user interfaces
            (UI) for web applications. It is founded on the idea of components,
            which are independent modules containing the logic, state, and user
            interface (UI) of a specific section of the application. A virtual
            DOM (Document Object Model) is created when a React application is
            loaded in the browser. This DOM is then rendered to the actual DOM
            by comparing the differences between the two and making the
            appropriate updates. Declarative UI development is how React builds
            UI; you tell it how you want it to look, and it takes care of the
            rest. Additionally, it employs a one-way data flow in which
            information is transferred from the parent component to the child
            component.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
