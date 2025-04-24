import { build as buildCSS } from './build-css'
import { exec } from 'child_process'
import { promisify } from 'util'
import path from 'path'

import { generateTailwindConfig } from './generate-tailwind-config'

const execAsync = promisify(exec)

/**
 * 构建全部资源
 * 1. 生成CSS文件
 * 2. 生成Tailwind配置
 */
async function build() {
  console.log('开始构建...')

  // 先构建CSS文件
  console.log('1. 构建CSS变量文件...')
  await buildCSS()

  // 然后生成Tailwind配置
  console.log('2. 生成Tailwind配置...')
  await generateTailwindConfig()

  console.log('构建完成！')
}

// 执行构建
build().catch(console.error)
