import request from '@/utils/request'

const api_name = '/admin/system/sysRole'

// 获取角色列表数据
export function getPageList(page, limit, searchObj)  {
  return request({
    url: `${api_name}/${page}/${limit}`,
    method: 'get',
    params: searchObj
  })
}

export function removeById(id) {
  return request({
    url: `${api_name}/remove/${id}`,
    method: 'delete'
  })
}

export function save(role) {
  return request({
    url: `${api_name}/save`,
    method: 'post',
    data: role
  })
}

//编辑
export function getById(id) {
  return request({
    url: `${api_name}/get/${id}`,
    method: 'get'
  })
}

//更新
export function updateById(role) {
  return request({
    url: `${api_name}/update`,
    method: 'post',
    data: role
  })
}

// 批量删除
export function batchRemove(idList) {
  return request({
    url: `${api_name}/batchRemove`,
    method: `delete`,
    data: idList
  })
}

//根据用户id查询用户已分配的角色
export function getRolesByUserId(userId) {
  return request({
    url: `${api_name}/toAssign/${userId}`,
    method: 'get'
  })
}

//分配角色
export function assignRoles(assginRoleVo) {
  return request({
    url: `${api_name}/doAssign`,
    method: 'post',
    data: assginRoleVo
  })
}
