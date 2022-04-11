import * as core from '@actions/core'

export function debug(title: string, content: any) {
  
    core.info(`::group::${title}`)
    core.info(JSON.stringify(content, null, 3));
    core.info('::endgroup::')
  
}