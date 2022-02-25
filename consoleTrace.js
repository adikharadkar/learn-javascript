// The console.trace() method tracks the execution of the code from starting point to the endpoint and how the code ended at a certain point.

const hello = () => {
  const hi = () => {
    console.trace();
  };
  hi();
};
hello();
