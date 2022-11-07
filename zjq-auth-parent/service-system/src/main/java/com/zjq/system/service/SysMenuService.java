package com.zjq.system.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.zjq.model.system.SysMenu;
import com.zjq.model.vo.AssginMenuVo;

import java.util.List;

/**
 * @version: java version 1.8
 * @Author: zjq
 * @description:
 * @date: 2022-11-05 9:32
 */
public interface SysMenuService extends IService<SysMenu> {

    /**
     * 菜单树形数据
     *
     * @return
     */
    List<SysMenu> findNodes();

    void doAssign(AssginMenuVo assginMenuVo);

    List<SysMenu> findMenuByRoleId(String roleId);

    void removeMenuById(String id);

}
