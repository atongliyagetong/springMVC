
# 框架工具springMVC+mybatis+maven+git 

## 框架特性

1. 目录结构清晰。从框架配置文件，到项目分层结构，依个人拙见规范分类放置，并都配有响应注释，浅显易懂且易于修改；

2. ajax请求响应统一处理。编写了一个ResultMsg专门用于处理各种ajax请求的信息，封装了成功与否、携带的数据、错误信息等等；

3. 方便接入restFul方式接口，静态资源提取web.xml配置；

4. 数据库启用注解式事务，支持失败回滚；

5. mybatis批量insert，批量update代码完善；

***
###  实现功能

1. 登录，验证用户名密码，匹配成功进入详情页

2. 详情页商品数据展示

   2.1 指定每页的显示数量，显示商品数据
   2.2  页面分页设置，当前页/总页数，首页、上页、下页、尾页，指定页跳转;

***

### 后台数据接口

1. 登录
   url : /login

   controller : login(String username, String password);

   service : 
   LoginService : validateLogin(String username, String password)

   GoodsService : 

   mapper :
   UserMapper : User selectByUsername(String username)

2. 根据偏移量查询指定数目的记录
   url : /goods/selectByNo/{pageNo}/{rowCount}

   controller : selectByGoodsNo(@PathVariable ("pageNo") int pageNo, @PathVariable ("pageNo") int rowCount);

   service :
   GoodsService : selectByGoodsNo(int page,int rowCount){
   offset = page*rowCount;
   }

   mapper : 
   GoodsMapper : List<Goods> selectByGoodsNo(int offset, int rowCount);

3. 分页

   url : /page/{pageNo}/{rowCount} 

   controller : pageTo(int pageNo , int rowCount)

   service :
   PageService : PageBar setPageBar(@PathVariable ("pageNo")  int pageNo ,@PathVariable ("pageNo") int rowCount);
   GoodsService : List<Goods> selectByGoodsNo(int page,int rowCount);

   mapper:
   GoodsMapper :  List<Goods> selectByGoodsNo(int offset, int rowCount);

***
### basePackage
1. entity
   1.1 User
   	[String username, String password]
   1.2 Goods
   	[String id, String goodsNo, String goodsName, String price, String createTime]

2. dto
   2.1 PageBar
   	 [String pageNo, String rowCount , boolean firstpage, boolean lastPage, String pageSum]
   2.2 	Result<T>
   	 [PageBar pageBar, data T, boolean success]

3. mapper
   3.1 UserMapper : 
   		User selectByUsername(String username)

   3.2 GoodsMapper :
   	   Result<List<Goods>> selectByGoodsNo(int offset, int rowCount);
   	   int selectRowSum(); 
   	   Goods selectOneRow(String goodsNo);
   	   int updateGoodsOne(Goods goods);
   	   int insertGoods(Goods goods);
   	   int deleteGoodsByNo(String goodsNo);


4. service
      4.1 UserService

      4.2 GoodsService

      4.3 PageService

5. controller

   5.1 LoginController : 

   	 public String login(String username, String password);

   5.2 GoodsController :
   	 public Result<Goods> updateGoodsOne(Goods goods);
   	 public Result<Goods> insertGoods(Goods goods);
   	 public Result<Goods> deleteGoodsByNo(String goodsNo);

   5.3 PageController :
   	 public Result<Goods> pageTo(String pageNo, String rowCount)

6. exception

7. util







