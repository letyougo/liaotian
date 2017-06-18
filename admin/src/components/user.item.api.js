import {host} from '../config'
import request from 'superagent'

export function detail(id, cb) {
    request
      .get(host +'user/'+id+'/detail')
      .end((err,res)=>{
          cb(res.body)
      })
}

export function addPost(id,obj,cb) {
    request
      .post(host+'user/'+id+'/post')
      .send(obj)
      .end((err,res)=>{
          cb(res.body)
      })
}
