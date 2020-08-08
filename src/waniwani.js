import React, { Component } from 'react';
import "./waniwani.css";
import cave_Right from './image/cave_Right.png';
import cave_Left from './image/cave_Left.png';
import mogura from './image/mogura.png';
import wani from './image/wani.png';
import hamstar from './image/hamstar.png';
import saru from './image/saru.png';
import inu from './image/inu.png';

const ImgList = [mogura, wani, hamstar, saru, inu];
const NameList = ["mogura", "wani", "hamstar", "saru", "inu"]

export default class Cooking extends Component  {
    constructor (props) {
        super(props);
        this.state = {
            btn:"",
            Image:"",
            Name:"",
            Ans:"",
            level:"easy"
        };
    }

    AppearImg = () => {
        var buf = Math.floor(Math.random() * (ImgList.length));
        this.setState({
            Image:ImgList[buf]
        });
        this.setState({
            Name:NameList[buf]
        })
    }

    ClickStart = () =>{
        this.AppearImg();
        this.setState({
            btn:"aaa"
        })
    }

    InitBtnState = () =>{
        this.setState({
            btn:""
        })
    }

    ClickAns = () => {
        const {Ans} = this.state;
        const {Name} = this.state;
        if(Name === Ans){
            alert("正解!!");
        }else{
            alert("不正解!!");
        }
        console.log("Ans:"+Ans);
        this.setState({
            btn:""
        })      
    }

    render() {
        const {btn} = this.state;
        return (<div>
            <div className="Header">
                <h1>誰が出てくるかな？</h1>
                <h3>誰が出てくるかな？ 当ててみて</h3>
                <a>レベル: </a>
                <select name="level" onChange={(e) => this.setState({level:e.target.value})}>
                    <option value="easy"  >簡単</option>
                    <option value="nomal" >普通</option>
                    <option value="difficult">難しい</option>
                </select>
            </div>
            <div className="Cave">
            <ul >
                <li className="Cave_Left"><img src={cave_Left} alt="cave" width="130px" height="100px"/></li>
                <li className="Cave_Right"><img src={cave_Right} alt="cave" width="130px" height="100px" /></li>
            </ul>
            </div>
            {
               ( () => {
                    if(btn ===""){
                        return (
                            <a></a>
                        );
                    }else{
                        const {Image} = this.state;
                        const {level} = this.state;
                        if(level === "easy"){
                            return (
                                <div className="MoveDev">
                                <div className="box_easy" ><img src={Image} alt="mogura" width="80px" height="80px"/></div>
                                </div>
                            );
                        }else if(level=== "nomal"){
                            return (
                                <div className="MoveDev">
                                <div className="box_nomal" ><img src={Image} alt="mogura" width="80px" height="80px"/></div>
                                </div>
                            );
                        }else if(level == "difficult"){
                            return (
                                <div className="MoveDev">
                                <div className="box_difficalt" ><img src={Image} alt="mogura" width="80px" height="80px"/></div>
                                </div>
                            );
                        }

                    }
                })()
            }
            <div className="selectAns">
            {
                (() => {
                    if(btn ===""){
                        return(
                            <input type="button" id="StButton"　value="スタート" onClick={this.ClickStart}></input>
                        );
                    }else{
                        return(
                            <div>
                                <label>モグラ</label>
                                <input type="radio" name="aradio" value="mogura" 
                                onChange={() => this.setState({Ans:"mogura"})}  /> <br/>
                                <label>ワニ</label>
                                <input type="radio" name="aradio" value="wani" 
                                onChange={() => this.setState({Ans:"wani"})} /><br/>
                                <label>ハムスター</label>
                                <input type="radio" name="aradio" value="hamstar" 
                                onChange={() => this.setState({Ans:"hamstar"})} /><br/>
                                 <label>サル</label>
                                <input type="radio" name="aradio" value="saru" 
                                onChange={() => this.setState({Ans:"saru"})}  /> <br/>
                                <label>イヌ</label>
                                <input type="radio" name="aradio" value="inu" 
                                onChange={() => this.setState({Ans:"inu"})} />
                                <hr />
                                <br/>
                                <input type="button" id="StButton"　value="アンサーボタン" onClick={this.ClickAns}></input>
                            </div>
                        );
                    }

                })()
            }    
            </div>
            
        </div>);
    }
  }