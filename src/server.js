import express from "express"; /*express라는 package를 express라는 이름으로 import 
-> node modules에서 express를 찾고 있다는 걸 알아냄, node_modules/express라고 할 필요가 없음*/
import morgan from "morgan"
import globalRouter from "./routers/globalRouter";//독립된 globalRouter을 갖고옴//
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express(); //express function을 사용하면 express application을 생성해줌// 
const logger = morgan("dev");


app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views" )
app.use(logger);
//requests로 받고 respone을 통해 반드시 응답해줘야 됨 안그러면 브라우저는 계속해서 로딩 중일 것임//
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

//req와 res 사이에 middleware이 존재함//
//샌드위치 처럼 app을 생성하는 코드와 외부 접속을 받는 코드 사이에 app을 설정하는 코드를 채워넣자//

const handleListening = () => 
  console.log(`✅Server listening on port http://localhost:${PORT}🚀`); 
//템플릿 문자열을 사용할 때는 백틱(`) 사용, 외부 접속을 listen하는 코드//

app.listen(PORT, handleListening);
//ctrl + c ->서버 종료, npm run dev-> 서버 재시작//
