import React, { Component } from 'react'

class porstform extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            body:''
        }
        this.onChangeHandler=this.onChangeHandler.bind(this)
    }

    onChangeHandler(e){
        console.log(e,"e")
        console.log(e.target,"target")
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <div>
                <h1>Add Post Form</h1>
                <form>
                    <div>
                        <label>Title</label>
                        <br/>
                        <input type="text" name="title" onChange={this.onChangeHandler}  value={this.state.title}/>
                    </div>
                    <br/>
                    <div>
                        <label>Body</label>
                        <br/>
                        <textarea type="text" name="body" onChange={this.onChangeHandler} value={this.state.body} />
                    </div>
                    <br/>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default porstform
