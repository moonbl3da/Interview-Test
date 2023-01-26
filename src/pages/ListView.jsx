import React from 'react';
import ReactDOM from 'react-dom';

class ListView extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = { 
            'items': {}
        }
    }
    
    componentDidMount()
    {
        this.getItems();
    }

    getItems()
    {
        fetch('https://api.coinbase.com/v2/currencies')
        .then(results => results.json())
        .then( results => this.setState({'items': results }) );
    }

    render()
    {
        const data = this.state.items.data
        return (
            <ul>
                {
                    data && data.map(
                        (item, index) =>
                        {
                            return(
                                <div key={index} className="border-b-2 p-4">
                                <h1 className="text-xl font-medium">{item.id} </h1>
                                <p className="text-base font-medium">{item.name}</p>
                                <p className="text-base font-medium">{item.min_size}</p>
                                </div>
                            )
                        }
                    )
                }
            </ul>
        );
    }
}

ReactDOM.render(<ListView />, document.getElementById("root"));
export default ListView;
