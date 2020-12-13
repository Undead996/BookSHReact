class Stars extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr: [{id:0, val:"check"}, {id:1, val:"check"}, {id:2, val:"check"}, {id:3, val:"check"}, {id:4, val:"check"}],
            mark:0,
        }
        this.color = this.color.bind(this);
        this.reColor = this.reColor.bind(this);
        this.makeMark = this.makeMark.bind(this);
    }
    color(e){
        let tmp = this.state.arr;
        if(this.state.mark==0){
            for(let i=0;i<= +e.target.id;i++){
                tmp[i]["val"]="check checked";
            }
            this.setState({
                arr: tmp
            })
        }
        if(e.target.id>this.state.mark-1 && this.state.mark!=0){
            for(let i=0;i<= +e.target.id;i++){
                tmp[i]["val"]="check checked";
            }
            this.setState({
                arr: tmp
            })
        }if(e.target.id<=this.state.mark-1 && this.state.mark!=0){
            for(let i= +e.target.id;i<tmp.length-1;i++){
                tmp[+i+1]["val"]="check";
            }
            this.setState({
                arr: tmp
            })
        }
    }
    reColor(e){
        let tmp = this.state.arr;
            for(let i=0;i<= +e.target.id;i++){
                tmp[i]["val"]="check";
            }
            if(this.state.mark!=0){
                for(let i=0;i<= this.state.mark-1 ;i++){
                    tmp[i]["val"]="check checked"
                }
            }
            this.setState({
                arr: tmp
            })
    }
    makeMark(e){
        let tmp = this.state.arr;
        let m = e.target.id;        
        for(let i=0;i<= +m ;i++){
            tmp[i]["val"]="check checked"
        }
        this.setState({
            arr: tmp,
            mark: +m +1,
        })
    }
    render(){
        let boxes = this.state.arr.map(box =>(
                 <Boxes key={box.id}
                class={box.val}
                color={this.color}
                id={box.id}
                reColor={this.reColor}
                makeMark={this.makeMark}/>          
        ))
        return <div className="check-container">
            {boxes}
        <p>{this.state.mark}/{this.state.arr.length}</p>
        </div>

    }
}
