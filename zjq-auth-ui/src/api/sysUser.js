import request from '@/utils/request'

const api_name = '/admin/system/sysUser'

// 获取用户分页列表
export function getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj // url查询字符串或表单键值对
    })
}

export function getById(id) {
  return request({
    url: `${api_name}/get/${id}`,
    method: 'get'
  })
}

export function save(role) {
  return request({
    url: `${api_name}/save`,
    method: 'post',
    data: role
  })
}

//更新
export function updateById(user) {
  return request({
    url: `${api_name}/update`,
    method: 'post',
    data: user
  })
}

// 批量删除
export function removeById(id) {
  return request({
    url: `${api_name}/remove/${id}`,
    method: 'delete'
  })
}

// 批量删除
export function updateStatus(id, status) {
  return request({
    url: `${api_name}/updateStatus/${id}/${status}`,
    method: 'post'
  })
}
