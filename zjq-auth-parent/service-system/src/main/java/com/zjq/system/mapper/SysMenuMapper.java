package com.zjq.system.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.zjq.model.system.SysMenu;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
 * @version: java version 1.8
 * @Author: zjq
 * @description:
 * @date: 2022-11-05 9:31
 */
@Repository
@Mapper
public interface SysMenuMapper extends BaseMapper<SysMenu> {
}
