class Boxes extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className={this.props.class} id={this.props.id} onMouseOver={this.props.color} onMouseOut={this.props.reColor} onClick={this.props.makeMark}>&#9733;</div>
    }
}