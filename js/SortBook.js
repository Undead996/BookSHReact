class SortBook extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                selected1: false,
                selected2: false
            }
        this.sortFunc1 = this.sortFunc1.bind(this);
        this.sortFunc2 = this.sortFunc2.bind(this);
        this.reset = this.reset.bind(this);
    }
    sortFunc1(e){
        e.preventDefault()
        this.props.sortBook(-1);
        this.setState({selected1: !this.state.selected1,
                       selected2: false,});
    }
    sortFunc2(e){
        e.preventDefault()
        this.props.sortBook(1);
        this.setState({selected1: false,
                       selected2: !this.state.selected2});
    }
    reset(e){
        e.preventDefault()
        this.props.sortBook(0);
        this.setState({
            selected1: false,
            selected2: false,
        })
    }
    render(){
        let btnClassName1 = this.state.selected1 ?  "btn-select" : "s";
        let btnClassName2 = this.state.selected2 ?  "btn-select" : "s";
        return <div>
            <h2>Сортировка</h2>
            <span><button className={"btn btn-success "+ btnClassName1} onClick={this.sortFunc1}>Цена ↓</button>
            <button className={"btn btn-success "+ btnClassName2} onClick={this.sortFunc2}>Цена ↑</button>
            <button className="btn btn-success " onClick={this.reset}>Сбросить</button>
            </span>
        </div>
    }
}