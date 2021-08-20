查询核酸结果



查询预约

http://127.0.0.1:3000/users/checkOrderByCode

post
req: {code: 'SDFSDF345'}
res: {code:'asfsfsdf32423',name:'',age:34,address:'北京昌平'，email:'123@qq.com'}


预约核酸检测
http://127.0.0.1:3000/users/order

post
req: {name:'',gender:'',age:'',address:'',email:'',dataTime:''}
res: {code: 1000，_id:"sdfeiutku877364859kirutj"}

上传图片
type:0正面 1反面
req: {_id:iuuetktt987llkss,type:0}

根据id返回预约后的信息
http://127.0.0.1:3000/users/getOrderInfoById
req:{_id:id}
res:{code: doc.code,
                name: doc.name,
                address: doc.address,
                date: doc.date,
                email: doc.email}

http://127.0.0.1:3000/users/getOrderInfoByCode
get
req:{code: code}
res:       {
                code: doc.code,
                name: doc.name,
                address: doc.address,
                date: doc.date,
                email: doc.email,
                result: doc.result
            }

后台----------------------


登陆
http://127.0.0.1:3000/users/login

req:{userName:'老白'，password:'23423432'}
res:{code:1000}

预约列表
http://127.0.0.1:3000/users/list
GET

RES:
list:[{code:'ASF12345',name:'老白'，gender:'1','identityCard':'130658975155879','email':'554455@qq.com', address:'sdkkkkkkkkk','result':'ddd'},{},{}]




输入查询码
GET
req:
{code:'ADF444444'}
res: 
info:{code:'ASF12345',name:'老白'，gender:'1','identityCard':'130658975155879','email':'554455@qq.com', address:'sdkkkkkkkkk','result':'ddd'}



用户列表
http://127.0.0.1:3000/users/getUserList
GET

RES:
list:[{code:'ASF12345',name:'老白'，gender:'1','identityCard':'130658975155879','email':'554455@qq.com', address:'sdkkkkkkkkk','result':'ddd'},{},{}]

http://127.0.0.1:3000/users/getInfoByName

req: {name: 'xl'}
res:
info:{code:'ASF12345',name:'老白'，gender:'1','identityCard':'130658975155879','email':'554455@qq.com', address:'sdkkkkkkkkk','result':'ddd'}

http:127.0.0.1:3000/users/getInfoByCode

req: {code: 'ASDFSD877'}
res:
info:{code:'ASF12345',name:'老白'，gender:'1','identityCard':'130658975155879','email':'554455@qq.com', address:'sdkkkkkkkkk','result':'ddd'}

