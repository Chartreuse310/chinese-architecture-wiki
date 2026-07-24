# 中国古建筑 wiki

整合「中国古代营造体系」术语的开源知识库，基于 [Quartz v5](https://quartz.jzhao.xyz) 构建，部署于 GitHub Pages。

**站点地址**：[https://chartreuse310.github.io/chinese-architecture-wiki/](https://chartreuse310.github.io/chinese-architecture-wiki/)

## 仓库结构

```
chinese-architecture-wiki/
├── quartz/             # 发布层（Quartz v5 站点）
│   ├── content/        # 规范内容源（slug 文件名 + title/aliases frontmatter，被追踪）
│   └── quartz.config.yaml
├── .github/workflows/deploy.yml
└── wiki-planning/      # 规划、对话与运维记录
```

> 内容源是 Obsidian vault（外部临时输入）：每次更新由用户提供 vault，经「镜像 + 转换」（中文文件名→slug、`aliases`→`title`）写入 `quartz/content/`，然后删除 vault。vault 不入库。

## 本地预览

```bash
cd quartz
npm install
npm run install-plugins   # 生成 .quartz/plugins 索引
npx quartz build --serve
```

## 部署

推送到 `main` 分支即触发 GitHub Actions 构建发布到 `https://chartreuse310.github.io/chinese-architecture-wiki/`。

详见 [`wiki-planning/`](wiki-planning/)。

## 许可证

本仓库采用双重许可证策略：

| 内容范围 | 许可证 |
|---------|--------|
| `quartz/content/`（知识内容）、`wiki-planning/`（规划记录） | [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `quartz/` 目录下除 `content/` 外的代码框架 | [MIT License](quartz/LICENSE.txt)（Quartz 原项目许可证） |

**CC-BY-SA 4.0 核心条款：**
- **署名（Attribution）**：必须注明原作者，提供许可证链接，并说明是否有修改
- **相同方式共享（ShareAlike）**：如果对内容进行修改并分发衍生作品，必须采用相同许可证

完整许可证文本详见 [LICENSE](LICENSE) 文件。
