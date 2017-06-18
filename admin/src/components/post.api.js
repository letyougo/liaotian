/**
 * Created by Administrator on 2017/6/11.
 */

import {host} from '../config'
import request from 'superagent'


export const get_all_post = function (cb) {
  request
    .get(host+'post')
    .end(function (err,res) {
        cb(res.body)
    })
}
