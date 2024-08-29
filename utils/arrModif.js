export const calculateHostAge = (bornDate) => {
  const ageInNano = resignDate - launchDate;
 
  return new Date(ageInNano).getFullYear()
}

// export const flattenedHosts = hosts.reduce((histories, host) => {
//   return histories.concat(host.history);
// }, []);