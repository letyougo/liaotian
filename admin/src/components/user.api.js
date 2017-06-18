/**
 * Created by Administrator on 2017/6/11.
 */

import {host} from '../config'
import request from 'superagent'


export const get_all_user = function (cb) {
  request
    .get(host+'user')
    .end(function (err,res) {
        cb(res.body)
    })
}
