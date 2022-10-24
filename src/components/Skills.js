const skills = ['css', 'git', 'html', 'javascript', 'mongodb','nextjs', 'node', 'react', 'typescript']

export const template = () => skills.map(skill => `<img src="svg/${skill}.svg" alt="${skill} logo" id="${skill}">`).toString()
                                                                                                                          .replace(/,/g, '')


