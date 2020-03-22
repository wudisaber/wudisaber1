/*
Navicat MySQL Data Transfer

Source Server         : lzh
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : rbq

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-03-22 20:30:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `category_id` int(255) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '手机');
INSERT INTO `category` VALUES ('2', '笔记本');
INSERT INTO `category` VALUES ('3', '智能配件');
INSERT INTO `category` VALUES ('4', '周边配件');
INSERT INTO `category` VALUES ('5', 'oppo手机');
INSERT INTO `category` VALUES ('6', 'vivo手机');
INSERT INTO `category` VALUES ('7', '华为手机');
INSERT INTO `category` VALUES ('8', '联想电脑');
INSERT INTO `category` VALUES ('9', '苹果手机');
INSERT INTO `category` VALUES ('10', '戴尔电脑');
INSERT INTO `category` VALUES ('11', '外星人电脑');
INSERT INTO `category` VALUES ('12', '老年机');
INSERT INTO `category` VALUES ('13', '苹果电脑');
INSERT INTO `category` VALUES ('14', '电脑配件');
INSERT INTO `category` VALUES ('15', '手机配件');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_price` decimal(10,2) DEFAULT NULL,
  `product_dprice` decimal(10,2) DEFAULT NULL,
  `product_img_url` varchar(255) DEFAULT NULL,
  `product_num` int(11) DEFAULT NULL,
  `product_detail` varchar(255) DEFAULT NULL,
  `product_text1` varchar(255) DEFAULT NULL,
  `product_text2` varchar(255) DEFAULT NULL,
  `product_pinpai` varchar(255) DEFAULT NULL,
  `product_zhifu` varchar(255) DEFAULT NULL,
  `product_title` varchar(255) DEFAULT NULL,
  `product_jieshao` varchar(255) DEFAULT NULL,
  `product_xianka` varchar(255) DEFAULT NULL,
  `product_chuliqi` varchar(255) DEFAULT NULL,
  `product_canshu` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', '1', '小米无线鼠标', '64.00', '64.00', 'http://img0.imgtn.bdimg.com/it/u=732975577,3500961473&fm=26&gp=0.jpg', '999999', '图文详情', '新品', '销量：0', '小米无线鼠标', '微信支付', '小米鼠标A', '轻薄全金属机身，11.5小时超长续航', '12.5集成显卡', '英特尔 酷睿 i5处理器', '产品参数');
INSERT INTO `product` VALUES ('2', '1', '小米笔记本', '4799.00', '4799.00', 'http://img5.imgtn.bdimg.com/it/u=2842441648,2557979843&fm=26&gp=0.jpg', '999999', '图文详情', '新品', '销量：0', '小米笔记本', '微信支付', '小米笔记本Air', '轻薄全金属机身，11.5小时超长续航', '12.5集成显卡', '英特尔 酷睿 i5处理器', '产品参数');
INSERT INTO `product` VALUES ('3', '2', '小米手机', '999.00', '999.00', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3692631454,1643248172&fm=26&gp=0.jpg', '999999', '图文详情', '新品', '销量：0', '小米手机', '支付宝支付', '小米手机Air', '轻薄全金属机身，11.5小时超长续航', '12.5集成显卡', '英特尔 酷睿 i5处理器', '产品参数');
INSERT INTO `product` VALUES ('4', '2', '小米手机', '1999.00', '1999.00', 'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=0d28b3406dd0f703f9b293dc38fb5148/faf2b2119313b07e4dbbb55f03d7912397dd8c67.jpg', '999999', '图文详情', '新品', '销量：0', '小米手机', '支付宝支付', '小米手机Air', '轻薄全金属机身，11.5小时超长续航', '12.5集成显卡', '英特尔 酷睿 i5处理器', '产品参数');

-- ----------------------------
-- Table structure for product_image
-- ----------------------------
DROP TABLE IF EXISTS `product_image`;
CREATE TABLE `product_image` (
  `image_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_image
-- ----------------------------
INSERT INTO `product_image` VALUES ('1', '1', 'http://img0.imgtn.bdimg.com/it/u=732975577,3500961473&fm=26&gp=0.jpg');
INSERT INTO `product_image` VALUES ('2', '1', 'http://img2.imgtn.bdimg.com/it/u=1273688239,2735445295&fm=26&gp=0.jpg');
INSERT INTO `product_image` VALUES ('3', '2', 'http://img5.imgtn.bdimg.com/it/u=2842441648,2557979843&fm=26&gp=0.jpg');
INSERT INTO `product_image` VALUES ('4', '2', 'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=0d28b3406dd0f703f9b293dc38fb5148/faf2b2119313b07e4dbbb55f03d7912397dd8c67.jpg');
INSERT INTO `product_image` VALUES ('5', '3', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3692631454,1643248172&fm=26&gp=0.jpg');
INSERT INTO `product_image` VALUES ('6', '3', 'http://img0.imgtn.bdimg.com/it/u=1366323328,263959376&fm=11&gp=0.jpg');
INSERT INTO `product_image` VALUES ('7', '4', 'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=0d28b3406dd0f703f9b293dc38fb5148/faf2b2119313b07e4dbbb55f03d7912397dd8c67.jpg');
INSERT INTO `product_image` VALUES ('8', '4', 'http://img2.imgtn.bdimg.com/it/u=1514977725,2919258057&fm=11&gp=0.jpg');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(100) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `login_password` varchar(255) NOT NULL,
  `user_phone` varchar(255) DEFAULT NULL,
  `user_age` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'saber', '123456', '15139411295', '18');
INSERT INTO `user` VALUES ('2', '张三', '123456', null, '28');
INSERT INTO `user` VALUES ('3', 'undefined', '5e543256c480ac577d30f76f9120eb74', null, null);
INSERT INTO `user` VALUES ('4', 'saber', 'e10adc3949ba59abbe56e057f20f883e', null, null);
INSERT INTO `user` VALUES ('5', 'aaa', '96e79218965eb72c92a549dd5a330112', null, null);
