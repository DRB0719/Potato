// SPDX-License-Identifier: MIT
// 生产者 加工者(加工地 加工产品[]) 运输 
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;
contract PotatoManage {
     struct Msg{
        uint protype;
        string date;
        string msgg;
    }
    struct Producer{
        address username;//地址，唯一标识
        uint place;//1~34表示34个省市自治区
        uint protype;//1=生产者 2=加工者 3=运输 4=商场
        string[] Mypotato;
    }
    struct Potato{
        string id;
        uint weight;//加工完毕时总重
        uint balance;//剩余重量 用于销售时统计
        bool icheck;
        string class;
        uint place;
        Msg[] history;

    }
    string[] potatoList;
    address[] producerList;
    mapping (string => Potato) mapPotato;
    mapping (address => Producer) mapProducer;
    event log(bytes32);

    //添加工作用户 ;protype 1=生产者 2=加工者 3=运输,4=商店;
     function Addproducer(uint _place,uint _protype)public {
        string[] memory _Mypotato;
        producerList.push(msg.sender);
        mapProducer[msg.sender]=Producer(msg.sender,_place,_protype,_Mypotato);
    }

    //将土豆添加到用户列表中 每个用户第一次对某批次土豆操作时使用,如商家销售土豆前先需要将土豆加入列表中
    function AddPotato(string memory _id)public{
        mapProducer[msg.sender].Mypotato.push(_id);
    }

    //创建一批新的土豆 只能由生产者进行
    function NewPotato(string memory _id,string memory _class, string memory _date)public returns(bool){
        if(mapProducer[msg.sender].protype==1){
       potatoList.push(_id);
       Potato storage quest = mapPotato[_id];
       quest.id=_id;
       quest.icheck=false;
       quest.class=_class;
       quest.balance=0;
       quest.place=mapProducer[msg.sender].place;
       quest.weight=0;
       quest.history.push(Msg(mapProducer[msg.sender].protype,_date,"start"));
      
       return true; //上传成功
       }
       return false; //工作者类型不合法
    }

    //更新土豆信息 可以由所有用户进行
    function updatepotato(string memory _id,string memory _date,string memory _msg)public returns(bool){  
         Potato storage quest = mapPotato[_id];
         quest.history.push(Msg(mapProducer[msg.sender].protype,_date,_msg));
         return true;
    }

    //检查土豆 只能由加工者进行 在此处更新土豆重量
    function checkpotato(string memory _id,uint _weight,bool _icheck,string memory _date,string memory _msg)public returns(bool){
        if(mapProducer[msg.sender].protype==2){
        Potato storage quest = mapPotato[_id];
        quest.icheck=_icheck;
        quest.weight=_weight;
        quest.balance=_weight;
        quest.history.push(Msg(mapProducer[msg.sender].protype,_date,_msg));
        return true;
        }
        else{
            return false;
        }

    }


    //销售土豆 只能由商家进行
    function storepotato(string memory _id,string memory _date,string memory _msg,uint _weight)public returns(bool){
        if(mapProducer[msg.sender].protype==4){
            Potato storage quest = mapPotato[_id];
            if(quest.balance>_weight){
                quest.balance=quest.balance-_weight;
                quest.history.push(Msg(mapProducer[msg.sender].protype,_date,_msg));
                 return true;
            }
            else return false;
        }
        return false;
    }

    //获取单个产品信息
    function getPotato(string memory _id)public view returns( Potato memory){
        Potato storage quest = mapPotato[_id];
        return quest;
    }

    function showProducer()view public returns(address[] memory){
        return producerList;
    }

    function showPotato()view public returns(string[] memory){
        return potatoList;
    }



    //拼接字符串 用于哈希校验
     function strConcat(string memory _a, string memory _b,string memory _c) public pure returns (string memory){
        bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);
        bytes memory _bc = bytes(_c);
        string memory ret = new string(_ba.length + _bb.length + _bc.length);
        bytes memory bret = bytes(ret);
        uint k = 0;
        for (uint i = 0; i < _ba.length; i++)bret[k++] = _ba[i];
        for (uint i = 0; i < _bb.length; i++) bret[k++] = _bb[i];
        for (uint i = 0; i < _bc.length; i++) bret[k++] = _bc[i];
        return string(ret);
   } 

   //哈希校验 需要上传本地土豆完整结构体
    function checkhash(string memory _id,uint _weight,bool _icheck,string memory _class,uint _place, Msg[] memory _localhis)public view returns(bool){
        Potato storage quest = mapPotato[_id];
        string memory _history="";
        string memory _local="";
        for(uint i=0;i<quest.history.length;i++){
            _history=strConcat(_history,quest.history[i].date,quest.history[i].msgg);
        }
        for(uint i=0;i<_localhis.length;i++){
            _local=strConcat(_local,_localhis[i].date,_localhis[i].msgg);
        }
        bytes32 expected_hash=keccak256(abi.encodePacked(quest.class,_history,quest.icheck,quest.id,quest.place,quest.weight));
        bytes32 result_hash=keccak256(abi.encodePacked(_class,_local,_icheck,_id,_place,_weight));
       if(expected_hash==result_hash){
           return true;
       }
       else{
           return false;
       }
    }

}