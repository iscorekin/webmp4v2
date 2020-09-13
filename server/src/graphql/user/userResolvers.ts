const user = () => {
  return {
    id: 1,
    role: 'ADMIN',
    name: 'Nikita'
  }
}

const login = (obj: any, args: any) => {
  console.log(args);
  return 'Logged successful'
}

export default { 
  queries: {
    user,
  },
  mutations: {
    login
  }
}