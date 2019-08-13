import React, {Component} from 'react';
import ListMakanan from '../ListData/ListMakanan';

class MenuMakanan extends Component {
    constructor(props){
        super(props);
        this.state = {
            pesan : 0,
            jumlah : 0 ,
            tampil : true,
        }
        this.PilihPesanan = this.pilihPesanan.bind(this);
        this.nasiPadang = this.nasiPadang.bind(this);
        this.sate = this.sate.bind(this);
        this.soto = this.soto.bind(this);
        this.uduk = this.uduk.bind(this);
        this.kuning = this.kuning.bind(this);
        this.batal = this.batal.bind(this);
    }
    pilihPesanan(value, e){
        this.setState({
            [value] : e.target.value,
            tampil : true
        })
    }
    nasiPadang(){
        this.setState((state,props)=> {
            return{
                pesan : "Nasi Padang",
                jumlah : this.state.jumlah + 1,
                tampil : true
            }
        })
    }
    sate(){
        this.setState((state,props)=> {
            return{
                pesan : "Sate",
                jumlah : this.state.jumlah + 1,
                tampil : true
            }
        })
    }
    soto(){
        this.setState((state,props)=> {
            return{
                pesan : "Soto",
                jumlah : this.state.jumlah + 1,
                tampil : true
            }
        })
    }
    uduk(){
        this.setState((state,props)=> {
            return{
                pesan : "Nasi Uduk",
                jumlah : this.state.jumlah + 1,
                tampil : true
            }
        })
    }
    kuning(){
        this.setState((state,props)=> {
            return{
                pesan : "Nasi Kuning",
                jumlah : this.state.jumlah + 1,
                tampil : true
            }
        })
    }
    batal(){
        this.setState((state,props)=> {
            return{
                pesan : "",
                jumlah : 0,
                tampil : false
            }
        })
    }
    
    render() {
        return(
            <div>
                <h3>Daftar Makanan Yang Kami Sediakan : </h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ListMakanan linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                <center>
                                    <button onClick={this.nasiPadang}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
                                <center>
                                    <button onClick={this.sate}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
                                <center>
                                    <button onClick={this.soto}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linkgambar="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
                                <center>
                                    <button onClick={this.uduk}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linkgambar="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" />
                                <center>
                                    <button onClick={this.kuning}>Pesan Sekarang</button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <input type="text" placeholder="Masukan Pesanan Anda" onChange={ e => this.pilihPesanan("pesan", e)}></input>
                <input type="number" placeholder="Jumlah Pesanan" onChange={e => this.pilihPesanan("jumlah", e)}></input>
                <button onClick={this.batal}>Batalkan Semua Pesanan</button>
                { this.state.tampil === true ? (
                    <div>
                        <h3>Pesanan Anda : {this.state.pesan}</h3>
                        <h4>Jumlah Pesanan : {this.state.jumlah}</h4>
                    </div>
                ) : (
                    <h1>
                        <center>Anda Belum Memesan</center>
                    </h1>
                )}
                
            </div>
        )
    }
}

export default MenuMakanan;