# 密码找回与邮件回跳

当前浏览器客户端使用 Supabase SSR 默认的 PKCE 流程，并自动完成 URL 中的一次性验证码交换。不要再调用一次 `exchangeCodeForSession`，也不要在日志、截图或聊天中记录验证码或令牌。

## 应用处理

- `src/lib/supabase/client.ts` 在共享浏览器客户端上监听经过 SDK 验证的 `PASSWORD_RECOVERY` 事件。即使邮件落到首页，也转到 `/reset-password/`，已在重置页时不重复跳转；普通登录不受影响。
- `src/app/login/page.tsx` 的重置邮件回跳地址使用当前来源的 `/reset-password/`，与静态导出的尾斜线一致。
- `src/app/reset-password/page.tsx` 等待 SDK 初始化并向服务验证用户后才允许提交。缺失会话、过期链接和网络异常分别给出可操作的提示；不在无会话状态下假装能修改密码。
- 修改成功后清空输入、退出当前设备会话，并让用户用新密码重新登录；退出失败不会被误报为密码未修改。

## Supabase 后台待核实的配置

应用代码不能读取或修改托管 Supabase 项目的后台 URL 配置及邮件模板。若邮件仍跳首页，项目管理者应在 Authentication → URL Configuration 检查：

- Site URL 为 `https://2368187105.github.io/`。
- Redirect URLs 包含精确地址 `https://2368187105.github.io/reset-password/`。
- 需要本地调试时另加 `http://localhost:3002/reset-password/`，不要用本地发起的 PKCE 请求在正式站完成验证。
- Reset Password 邮件模板的按钮使用 `{{ .ConfirmationURL }}`，不能只链接 `{{ .SiteURL }}`。自定义模板应按实际验证流程核对。

从正式站登录页重新发送邮件，并在发起请求的同一浏览器中打开最新邮件。若邮件已成功建立会话但停在首页，可在同一浏览器直接访问 `/reset-password/`。新密码由用户自行输入与提交。

## 验证范围

运行 `node scripts/verify-password-recovery.cjs` 检查恢复事件导航、普通登录不跳转、共享客户端单次注册、服务端不访问浏览器及重置页不循环跳转。测试使用隔离客户端，不发送邮件、不建立真实登录或修改密码。真实邮件、后台配置及最终修改密码仍需账号持有人验证。

参考：[密码重置 API](https://supabase.com/docs/reference/javascript/auth-resetpasswordforemail)、[回跳地址配置](https://supabase.com/docs/guides/auth/redirect-urls)、[PKCE 流程](https://supabase.com/docs/guides/auth/sessions/pkce-flow)。
