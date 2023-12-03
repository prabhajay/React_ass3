import React, { Component } from 'react';
class Products extends Component {
    state = {
    
    }
    render() { 
        return (
            <React.Fragment>
                <h1>Online Shopping</h1>
                <div className='images'>
                    <div className='container'>
                        <img className='img1' src="https://img.freepik.com/free-vector/set-glass-bottles-with-milk-with-different-labels_1441-821.jpg?size=250&ext=jpg&ga=GA1.1.1805015924.1701275658&semt=ais" alt="" />
                        <div className='p'>
                        <p>$5.34</p>
                        <button class="snipcart-add-item"
                         data-item-id="starry-night"
                         data-item-price="2.23"
                         data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
                         data-item-image="https://img.freepik.com/free-vector/set-glass-bottles-with-milk-with-different-labels_1441-821.jpg?size=250&ext=jpg&ga=GA1.1.1805015924.1701275658&semt=ais"
                         data-item-name="The Starry Night">
                            Add to cart
                        </button>                           </div>
                    </div> 
                    <div className='container'>
                        <img className='img1' src="https://img.freepik.com/free-vector/set-cheese-types-roquefort-brie-maasdam_107791-5890.jpg?size=250&ext=jpg&ga=GA1.1.1805015924.1701275658&semt=sph" alt="" />
                        <div className='p'>
                        <p>$2.23</p>
                        <button class="snipcart-add-item"
                         data-item-id="starry-night"
                         data-item-price="2.23"
                         data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
                         data-item-image="https://img.freepik.com/free-vector/set-cheese-types-roquefort-brie-maasdam_107791-5890.jpg?size=250&ext=jpg&ga=GA1.1.1805015924.1701275658&semt=sph"
                         data-item-name="The Starry Night">
                            Add to cart
                        </button>                 
                           </div>
                    </div>
                    <div className='container'>
                        <img className='img1' src="https://img.freepik.com/free-vector/juice-glass-bottles-set_1284-18965.jpg?size=250&ext=jpg&ga=GA1.1.1805015924.1701275658&semt=sph" alt='' />
                        <div className='p'>
                        <p>$12.43</p>
                        <button class="snipcart-add-item"
                         data-item-id="starry-night"
                         data-item-price="2.23"
                         data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
                         data-item-image="https://img.freepik.com/free-vector/juice-glass-bottles-set_1284-18965.jpg?size=250&ext=jpg&ga=GA1.1.1805015924.1701275658&semt=sph"
                         data-item-name="The Starry Night">
                            Add to cart
                        </button>                               </div>
                    </div>
                    <div className='container'>
                        <img className='img1' src="https://img.freepik.com/premium-vector/summer-fresh-juice_1114-484.jpg?size=250&ext=jpg&ga=GA1.1.1805015924.1701275658&semt=sph" alt='' />
                        <div className='p'>
                        <p>$13.34</p>
                        <button class="snipcart-add-item"
                         data-item-id="starry-night"
                         data-item-price="2.23"
                         data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
                         data-item-image="https://img.freepik.com/premium-vector/summer-fresh-juice_1114-484.jpg?size=250&ext=jpg&ga=GA1.1.1805015924.1701275658&semt=sph"
                         data-item-name="The Starry Night">
                            Add to cart
                        </button>                               </div> 
                    </div>
                </div>   
            </React.Fragment>
        );
    }
}
 
export default Products;