import { ironMan, request, keel } from "../init.case";

/**
 * 添加平台仓库
 */
it("add rope", (done) => {
  request
    .post(`/apis/rudder/v1/repos/${keel.repoName[0]}`)
    .set("authorization", ironMan.authorization)
    .send("https://tkeel-io.github.io/helm-charts")
    .expect(200, done);
});

/**
 * 获取仓库信息
 */
it("get repo info", (done) => {
  request
    .get(`/apis/rudder/v1/repos`)
    .set("authorization", ironMan.authorization)
    .expect(200, done);
});

export const keelCase = `keel 模块的测试用例`;