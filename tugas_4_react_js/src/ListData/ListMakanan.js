import React,{Component} from 'react';

class ListMakanan extends Component {
    constructor(props){
        super(props);
        this.state = {
            datalist : this.props.linkgambar
        }
    }
    render() {
        return (
            <div>
                <img src={this.state.datalist} alt="gambar-makanan" width="150"></img>
            </div>
        );
    }
}
export default ListMakanan;