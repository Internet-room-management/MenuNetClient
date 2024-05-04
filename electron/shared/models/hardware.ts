
const si = require('systeminformation');


// Định nghĩa lớp Client
class HardwarePC {
    // Lấy tên máy tính
    async namePC(){
      const os = require('os');
    
      
      // return the endianness of system
      // console.log("Endianness of system: " + os.endianness());
      
      // // It returns hostname of system
      // console.log("Hostname: " + os.hostname());
      
      // // It return operating system name
      // console.log("Operating system name: " + os.type());
      
      // // It returns the platform of os
      // console.log('operating system platform: ' + os.platform());
      
      // // It returns the operating systems release.
      // console.log('OS release : ' + os.release());
      // Lấy tên người dùng hiện tại
      const userName = await os.userInfo().username;
      const hostName = await os.hostname()
      // console.log('User Name:', userName);
      return Promise.resolve({NamePc: userName, hostName: hostName});
    
    }
    // // Lấy thông tin ổ cứng
    async infoHdd(){
      const total:any[] = []
      const data = await si.diskLayout();
      data.forEach((disk: { name: any; type: any; size: number; }, index: number) => {
        total.push({'Model':disk.name, 'Type': disk.type, 'Size': (disk.size / (1024 * 1024 * 1024)).toFixed(2)+ 'GB'})
      });
      return Promise.resolve(total);
    }

    // Lấy thông tin VGA
    async infoVga(){
      const total:any[] = []
      const data = await si.graphics();
      data.controllers.forEach((controller:any) => {
        total.push({'Model': controller.model, 'Vendor': controller.vendor})
      });
      return Promise.resolve(total);
    }
    // Lấy thông tin RAM
    async ramPC(){
      const data = await si.mem();
      return Promise.resolve({'TotalRAM':(data.total / (1024 * 1024 * 1024)).toFixed(2)+ ' GB', 'FreeRAM': (data.free / (1024 * 1024 * 1024)).toFixed(2)+ 'GB'});
    }
    // Lấy thông tin cpu
    async cpuPC(){
      const data = await si.cpu();
      return Promise.resolve(data.brand);
    }
    
    // Lấy thông tin network
    async NetworkSpeed() {
      const networkInterfaces = await si.networkInterfaces();
      const firstInterface = networkInterfaces[0]; // Lấy thông tin về card mạng đầu tiên
      return Promise.resolve({nameNetwork: firstInterface.iface, speed: firstInterface.speed, ipV4: firstInterface.ip4, mac: firstInterface.mac})
      // try {
          
      // } catch (error) {
      //     console.error('Lỗi khi kiểm tra tốc độ mạng:', error);
      // }
    }
}
export default HardwarePC;