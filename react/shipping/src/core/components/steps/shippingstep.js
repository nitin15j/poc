import React from "react";

export default class StepFour extends React.Component {
  render() {
    const { onAction } = this.props;
    const { shippingOption } = this.props;
    return (
      <div style={{ marginLeft: 15 + "%" }}>
        <h4>Enter shipping option</h4>
        <div>
          <div>
            <label>Shipping</label>
            <select
              onChange={onAction}
              value={shippingOption}
              data-id="shippingOption"
            >
              <option defaultValue="1" value="1">
                Ground
              </option>
              <option value="2">Express</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
