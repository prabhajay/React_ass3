import React, { Component } from 'react';
class Cart extends Component {
    state = { 
        count:0
     } 
    handleIncrement()
    {
        this.setState({count:this.state.count+1})
    }
    handleDecrement()
    {
        this.setState({count:this.state.count-1})
    }
    render() { 
        return (
            <React.Fragment>
                <div>
                    <h1>Cart Page</h1>
                    <div className='cartPage'>
                    <table>
            <tr>
              <th>Image</th>
              <th>price</th>
              <th>Quantity</th>
              <th>Sub Total</th>
            </tr>
            <tr>
              <td><img src="https://img.freepik.com/free-vector/set-glass-bottles-with-milk-with-different-labels_1441-821.jpg?size=250&ext=jpg&ga=GA1.1.1805015924.1701275658&semt=ais" height="300" width="300" alt="cheese" /></td>
              <td>$4.95</td>
                <td>
                    <div class="button">
                        <button class="btn1 btn btn-primary" type="button">-</button>
                        <span><p>1</p></span>
                        <button class="btn1 btn btn-primary" onClick={this.handleIncrement} type="button">+</button>
                    </div>
                </td>
                <td>$</td>
            </tr>
            <tr>
                <td><img src="https://img.freepik.com/free-vector/set-cheese-types-roquefort-brie-maasdam_107791-5890.jpg?size=250&ext=jpg&ga=GA1.1.1805015924.1701275658&semt=sph" height="300" width="300" alt="cheese" /></td>
                <td>$12.95</td>
                  <td>
                      <div class="button">
                          <button class="btn1 btn btn-primary" onClick={this.handleDecrement} type="button">-</button>
                          <span><p>1</p></span>
                          <button class="btn1 btn btn-primary" onClick={this.handleIncrement} type="button">+</button>
                      </div>
                  </td>
                  <td>$</td>
              </tr>
              <tr>
                <td><img src="https://img.freepik.com/premium-vector/summer-fresh-juice_1114-484.jpg?size=250&ext=jpg&ga=GA1.1.1805015924.1701275658&semt=sph" height="300" width="300" alt="cheese" /></td>
                <td>$23.95</td>
                  <td>
                      <div class="button">
                          <button class="btn1 btn btn-primary" type="button">-</button>
                          <span><p>1</p></span>
                          <button class="btn1 btn btn-primary" type="button">+</button>
                      </div>
                  </td>
                  <td>$</td>
              </tr>
              <tr>
                <td><img src="https://img.freepik.com/free-vector/juice-glass-bottles-set_1284-18965.jpg?size=250&ext=jpg&ga=GA1.1.1805015924.1701275658&semt=sph" height="300" width="300" alt="cheese" /></td>
                <td>$4.95</td>
                  <td>
                      <div class="button">
                          <button class="btn1 btn btn-primary" type="button">-</button>
                          <span><p>1</p></span>
                          <button class="btn1 btn btn-primary" type="button">+</button>
                      </div>
                  </td>
                  <td>$</td>
              </tr>

            </table>
            <h1>Total= </h1>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Cart;