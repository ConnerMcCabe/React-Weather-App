import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
      </form>
    )
  }
}

export default Form; 