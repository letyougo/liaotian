/**
 * Created by Administrator on 2017/6/18.
 */
import {host} from '../config'
import request from 'superagent'
export function detail(id,cb) {
  request.get(host+'user/'+id+'/detail')
    .end((err,res)=>{
        cb(res.body)
    })
}
