// import { join } from 'path';
// import {
//     app,
//     BrowserWindow,
//     ipcMain,
//     dialog
// } from 'electron';
var { join } = require('path');
var {
    app,
    BrowserWindow,
    ipcMain,
    dialog
} = require('electron');
// socket server
// let userClient:any = [];
// const io = require('socket.io')();
// //@ts-ignore
// io.on('connection', (socket) => {
//     console.log('socket connection:xxxxxxxxxxxx');

//     socket.on('register', (data:any) => {

//       console.log(`REGISTER :${JSON.stringify(data)}`);
//       userClient.push({
//                   socket,
//                   userid: data.userid,
//                   shopid: data.shopid,
//                   // shopid: config.resid,
//                   roleid: data.roleid,
//                   view: data.view
//                 });
//         userClient[0].socket.emit('notify_bar', 'successful')
//     });
    

// //   io.emit('welcome');

// //   socket.on("test", () => {
// //     console.log("received test"); // not displayed
// //     io.emit("ok");
// //   })
// });
// io.listen(18092);
var io = require ("socket.io-client");

//////////////////////////////////////


// const server = http.createServer(app).listen(port, () => {
//     // eslint-disable-next-line no-console
//     console.log('Socket.IO server started at %s!', port);
//   });
  
//   // const io = socketIO.listen(server);
//   const io = require('socket.io')(server);
  
//   function sleep(ms) {
//     return new Promise(resolve => {
//       setTimeout(resolve, ms)
//     })
//   }
  
//   module.exports.socketemituser = async (restid, event, data) => {
//     // console.log('socketemituser: ', restid, event, data)
//     // for (let i = 0; i < userClient.length; i++) {
//     //   // chỉ bắn event cho những user thuộc shop của mình.
//     //   if (userClient[i].shopid == restid) {
//     //     // console.log("userClient[i].shopid: ", userClient[i].shopid, event, data)
//     //     userClient[i].socket.emit(event, data);
//     //   }
//     // }
  
//     for await (const user of userClient) {
//       if (user.shopid == restid) {
//         // console.log("userClient[i].shopid: ", userClient[i].shopid, event, data)
//         user.socket.emit(event, data);
//         sleep(100)
//       }
//     }
  
  
  
//   };
  
//   io.sockets.on('connection', (socket) => {
//     console.log('socket connection:xxxxxxxxxxxx');
  
//     socket.emit('connected');
//     socket.emit('greeting', 'Nodejs da ket noi thanh cong den python socketIO');
  
//     socket.on('data', (data) => {
//       console.log(`data-----------------${data.toString()}`);
//     });
  
//     socket.on('customEvent', (data) => {
//       io.emit('customEvent', data);
//     });
  
//     socket.on('disconnect', async () => {
//       console.log('disconnect client tu bop dai', userClient.length);
  
//       for (let i = 0; i < userClient.length; i++) {
//         if (socket.id == userClient[i].socket.id) {
//           var userId = userClient[i].userid;
//           console.log(`disconnect ${userId}`);
//           userClient.splice(i, 1);
//           console.log(`splice ${userId} done`);
//           break;
//         }
//       }
//     });
  
//     socket.on('register', (data) => {
  
//       console.log(`REGISTER :${JSON.stringify(data)}`);
//       // console.log("resdasda: ", socket.id)
//       // socket.emit('register', {
//       //   status: 'connected',
//       //   socketid: socket.id,
//       // });
  
//       for (let i = 0; i < userClient.length; i++) {
//         if (userClient[i].userid === data.userid && userClient[i].socket.id != socket.id) {
  
//           console.log(`userid is exits${data.userid}`);
  
//           // userClient[i].socket.disconnect('unauthorized');
//         }
//       }
  
//       if (config.resid == 0) {
//         userClient.push({
//           socket,
//           userid: data.userid,
//           shopid: data.shopid,
//           // shopid: config.resid,
//           roleid: data.roleid,
//           view: data.view
//         });
//       } else {
//         userClient.push({
//           socket,
//           userid: data.userid,
//           // shopid: data.shopid,
//           shopid: config.resid,
//           roleid: data.roleid,
//         });
//       }
//     });
  
//     // socket.on('printing_complete', (data) => {
//     //   const fileLogsName = `logs/logPrintComplete/log-${dateFormat(new Date(), 'yyyy-mm-dd')}.log`;
  
//     //   writeLogFile(fileLogsName, data);
//     //   UpdatePrintStatus(data);
//     // });
  
//     socket.on('printCompleteNew', (data) => {
//       const fileLogsName = `logs/logPrintComplete/log-${dateFormat(new Date(), 'yyyy-mm-dd')}.log`;
//       writeLogFile(fileLogsName, data);
//       updatePrintStatusNew(data);
//     });
  
//     socket.on('getOrderOnline', (data) => {
//       console.log("Check data Order Online:", data)
//       if (typeof data == "undefined" || typeof data.shopid == "undefined" || data.shopid == undefined || !data.shopid || data.shopid.length == 0) {
//         return;
//       } else {
//         var result = [];
//         pool.getConnection(function (err, connection) {
//           if (err) throw err;
//           var start = new Date();
//           // var result = [];
  
//           connection.query(`CALL posOnlinegetListOnlineOrder(?)`, [data.shopid], function (err, rows) {
//             if (err) throw err;
//             var index = 0;
  
//             forloop(rows[0].length, function () {
//               var defer = q.defer();
//               connection.query("CALL posOnline_GetorderDetail(?)", [rows[0][index].orderid],
//                 async function (err, rows2) {
  
//                   if (err) throw err;
//                   let index2 = 0;
//                   let total = 0;
//                   forloop(rows2[0].length, function () {
//                     let defer2 = q.defer();
//                     // let defer2 = q.all();
//                     connection.query("call posOnlineGetExtraOrder(?)", [rows2[0][index2].id], (err, rows3) => {
  
//                       if (err) throw err;
//                       let index3 = 0;
//                       let totalprice = 0;
//                       let extras = "";
  
//                       forloop(rows3[0].length, () => {
//                         let defer3 = q.defer();
//                         defer3.resolve("xx");
//                         totalprice = totalprice + rows3[0][index3].amount;
  
//                         extras = extras + " + " + rows3[0][index3].quantity + " " + rows3[0][index3].name;
  
//                         index3 += 1;
//                         return defer3.promise;
//                       }).then((success) => {
//                         defer2.resolve(rows3[0]);
//                         rows2[0][index2].listExtras = rows3[0];
//                         rows2[0][index2].paid_prices = rows2[0][index2].paid_price + totalprice;
//                         rows2[0][index2].extras = extras;
//                         index2 += 1;
//                       })
//                     })
//                     return defer2.promise;
//                   }).then(function (success2) {
//                     defer.resolve(rows2[0]);
//                     result.push({
//                       cart: rows[0][index],
//                       products: rows2[0]
//                     });
//                     index += 1;
//                   })
//                 });
//               return defer.promise;
//             }).then(function (success) {
//               socket.emit('getOrderOnline', result);
  
//               var strResponse = JSON.stringify(result);
//               res.end(strResponse);
  
//               let log = {
//                 param: req.body,
//                 response: strResponse
//               }
//               server.writeLogFile(fileLogsName, log);
//             });
  
//           });
//           connection.release();
//         });
//       }
//     });
  
//     socket.on('hasOrderOnline', (data) => {
//       console.log("data has order:", data)
//       if (typeof data == "undefined" || typeof data.shopid == "undefined" || data.shopid == undefined) {
//         return;
//       } else {
//         for (let i = 0; i < userClient.length; i++) {
//           if (userClient[i].shopid == data.shopid) {
//             // var result = [];
//             getListOrderOnline(data.shopid, userClient[i]);
//           }
//         }
//       }
//     })
  
//     socket.on('notify_bar', (data) => {
//       if (typeof data == "undefined" || typeof data.shopid == "undefined" || data.shopid == undefined) {
//         return;
//       } else {
//         for (let i = 0; i < userClient.length; i++) {
//           console.log('userclient', userClient[i].view)
//           if (userClient[i].shopid == data.shopid && userClient[i].view == 'bar') {
//             console.log('oki notify bar')
//             userClient[i].socket.emit('notify_bar')
//           }
//         }
//       }
//     })
  
//   });


////// info hardware ////////////
const si = require('systeminformation');

// // promises style - new since version 3
// si.cpu()
// //@ts-ignore
//   .then(data => console.log(data))
//   //@ts-ignore
//   .catch(error => console.error(error));


// // Lấy thông tin RAM
// si.mem()
// //@ts-ignore
//   .then(data => {
//     console.log('RAM Information:');
//     console.log('Total RAM:', (data.total / (1024 * 1024 * 1024)).toFixed(2), 'GB');
//     console.log('Free RAM:', (data.free / (1024 * 1024 * 1024)).toFixed(2), 'GB');
//   })
//   //@ts-ignore
//   .catch(error => {
//     console.error('Error:', error);
//   });

// // Lấy thông tin VGA
// si.graphics()
// //@ts-ignore
//   .then(data => {
//     console.log('VGA Information:');
//     //@ts-ignore
//     data.controllers.forEach((controller, index) => {
//       console.log(`VGA ${index + 1}:`);
//       console.log('Model:', controller.model);
//       console.log('Vendor:', controller.vendor);
//       console.log('VRAM:', (controller.vram / (1024 * 1024)).toFixed(2), 'MB');
//     });
//   })
//   //@ts-ignore
//   .catch(error => {
//     console.error('Error:', error);
//   });

// // Lấy thông tin ổ cứng
// si.diskLayout()
// //@ts-ignore
//   .then(data => {
//     console.log('HDD/SSD Information:');
//     //@ts-ignore
//     data.forEach((disk, index) => {
//       console.log(`Disk ${index + 1}:`);
//       console.log('Model:', disk.name);
//       console.log('Type:', disk.type);
//       console.log('Size:', (disk.size / (1024 * 1024 * 1024)).toFixed(2), 'GB');
//     });
//   })
//   //@ts-ignore
//   .catch(error => {
//     console.error('Error:', error);
//   });

// Lấy thông tin mạng
let Network:any = []
// si.networkInterfaces()
// //@ts-ignore
//   .then(data => {
//     Network = data
//     console.log('Network Interfaces:');
//     //@ts-ignore
//     data.forEach((iface, index) => {
//       console.log(`Interface ${index + 1}:`);
//       console.log('Name:', iface.iface);
//       console.log('IP Address:', iface.ip4);
//       console.log('MAC Address:', iface.mac);
//     });
//   })
//   //@ts-ignore
//   .catch(error => {
//     console.error('Error:', error);
//   });

  /////////// name PC /////////////
const os = require('os');

// Lấy tên máy tính
// return the endianness of system
console.log("Endianness of system: " + os.endianness());
 
// It returns hostname of system
console.log("Hostname: " + os.hostname());
 
// It return operating system name
console.log("Operating system name: " + os.type());
 
// It returns the platform of os
console.log('operating system platform: ' + os.platform());
 
// It returns the operating systems release.
console.log('OS release : ' + os.release());
// Lấy tên người dùng hiện tại
const userName = os.userInfo().username;
console.log('User Name:', userName);

////////////////////////////////////////////
///////////////////// auto search 
// const socket = io(`http://192.167.1.242:18092`,{
					
// 					transports: ["websocket"],
// 				});
const localIPRange = '192.167.1.';
const startIP = 1;
const endIP = 255;

async function scanAndConnect() {
  await si.networkInterfaces()
  .then((data: any) => {
    Network = data
  })
    // for (let i = startIP; i <= endIP; i++) {
        // const ip = localIPRange + i;
        // const socket = io(`http://${ip}:18092`,{
        const socket = io(`http://192.167.1.242:18092`,{  
                            // timeout: 100,
                            transports: ["websocket"],
                    				});                 
        try {
            await new Promise<void>((resolve, reject) => {
                socket.on('connect', () => {
                    console.log(`Connected to server at {ip}`);
                    socket.emit("register", {
                      PcID: os.hostname(),
                      NamePC: userName,
                      Network: Network[0].ip4,
            
                    });
                    resolve();
                });
                socket.on('connect_error', (error: any) => {
                    console.error(`Connection to {ip} failed: ${error.message}`);
                    reject();
                });
                
                socket.on('welcome', () => {
                  console.log('on welcome : welcome received renderer'); // display
                });
            });
            // Nếu kết nối thành công, bạn có thể thực hiện các thao tác khác ở đây (nếu cần)
            //break; // Kết thúc vòng lặp sau khi tìm thấy IP hợp lệ
        } catch (error) {
            // Xử lý lỗi nếu có
        } finally {
           
            //socket.close(); // Đóng kết nối sau khi thử
        }
    // }
}

scanAndConnect();

  const isDev = process.env.npm_lifecycle_event === "app:dev" ? true : false;
  console.log('dev', isDev)
  

async function handleFileOpen() {
    const { canceled, filePaths } = await dialog.showOpenDialog({ title: "Open File" })
    if (!canceled) {
        return filePaths[0]
    }
}

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
              width: 1200,
      height: 1080, 
      show: false,
      icon: __dirname + '/icon.ico',
    //   maximizable: false, // Vô hiệu hóa maximize
      webPreferences: {
        // preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true,
        contextIsolation: false,
        nodeIntegrationInWorker: true,
        nodeIntegrationInSubFrames: true,
        // enableRemoteModule: true
      }

    });
     // Accept all usb
     // @ts-ignore
     mainWindow.webContents.on('select-usb-device', (event, details, callback) => {

     })

    // and load the index.html of the app.
    if (isDev) {
        mainWindow.loadURL('http://localhost:5174');// Open the DevTools.
        // mainWindow.loadFile(join(__dirname, '../../index.html'));
        mainWindow.webContents.openDevTools();
        // mainWindow.webContents.openDevTools({ mode: "detach" });
    } else {
        mainWindow.loadFile(join(__dirname, '../../index.html'));
    }
    // console.log('path', join(__dirname, '../../index.html'))
    // mainWindow.webContents.openDevTools({ mode: "detach" });
    // mainWindow.loadURL( //this doesn't work on macOS in build and preview mode
    //     isDev ?
    //     'http://localhost:3000' :
    //     join(__dirname, '../../index.html')
    // );
}

// function createWindows () {
//     // Create the browser window.
//     const mainWindow = new BrowserWindow({
//       // x: 0,
//       // y: 0,
//       // width: 350,
//       // height: 225,
//       width: 650,
//       height: 430,
//       icon: __dirname + '/icon.ico',
//       maximizable: false, // Vô hiệu hóa maximize
//       webPreferences: {
//         // preload: path.join(__dirname, 'preload.js'),
//         nodeIntegration: true,
//         contextIsolation: false,
//         nodeIntegrationInWorker: true,
//         nodeIntegrationInSubFrames: true,
//         // enableRemoteModule: true
//       }
//     })
//       // const ses = mainWindow.webContents.session;
//       // ses.clearCache(() => {
//       //   alert("Cache cleared!");
//       // });
  
//       // and load the index.html of the app.
      
//       // mainWindow.loadFile(path.join(__dirname, 'index.html'));
//       // and load the index.html of the app.
//       console.log(isDev)
//       if (isDev) {
//           mainWindow.loadURL('http://localhost:5173');// Open the DevTools.
//           mainWindow.webContents.openDevTools({ mode: "detach" });
//       } else {
         
//           mainWindow.loadFile(path.join(__dirname, '../../index.html'));
//       }
//        console.log('path html', __dirname)
//       mainWindow.webContents.openDevTools({ mode: "detach" });
//       // mainWindow.loadURL( //this doesn't work on macOS in build and preview mode
//       // isDev ?
//       // 'http://localhost:5174' :
//       // path.join(__dirname, '../../index.html')
//       // );
  
//       // mainWindow.on('minimize',function(event){
//       // event.preventDefault();
//       // });
  
//       // anti close
//       // mainWindow.on('close', function (event) {
//       //     event.preventDefault();
//       // });
  
//       mainWindow.setMenu(null)
//       mainWindow.setMenuBarVisibility(false)
//       mainWindow.resizable = false;
  
//       // Accept all usb
//       mainWindow.webContents.on('select-usb-device', (event, details, callback) => {
//         // Add events to handle devices being added or removed before the callback on
//         // `select-usb-device` is called.
//         mainWindow.webContents.on('usb-device-added', (event, device) => {
//           console.log('usb-device-added FIRED WITH', device)
//           // Optionally update details.deviceList
//         })
    
//         mainWindow.webContents.session.on('usb-device-removed', (event, device) => {
//           console.log('usb-device-removed FIRED WITH', device)
//           // Optionally update details.deviceList
//         })
    
//         event.preventDefault()
        
//       })
//       mainWindow.webContents.session.setPermissionCheckHandler((webContents, permission, requestingOrigin, details) => {
//         return true
//       })
//       mainWindow.webContents.session.setDevicePermissionHandler((details) => {
//         return true
//       })
     
//       // Open the DevTools.
//       // mainWindow.webContents.openDevTools({ mode: "detach" });
  
//       if (isDev) {
//         mainWindow.webContents.openDevTools({ mode: "detach" });
//         // require('react-devtools-electron');
//       };
//       if (!isDev) {
//         autoUpdater.checkForUpdates();
//       };
  
//       return mainWindow
//   }

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    ipcMain.handle('dialog:openFile', handleFileOpen)
    createWindow()
    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});