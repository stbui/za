// import React, { useRef } from 'react';
// import uuid from 'utils/uuid';
// import defaultRequest from './request';

// export class AjaxUpload extends React.Component {
//   reqs = {};

//   fileInput;

//   abort = (file) => {
//     if (file) {
//       const uid = file.uid ? file.uid : file;
//       if (this.reqs[uid] && this.reqs[uid].abort) {
//         this.reqs[uid].abort();
//       }
//       delete this.reqs[uid];
//     } else {
//       Object.keys(this.reqs).forEach((uid) => {
//         if (this.reqs[uid] && this.reqs[uid].abort) {
//           this.reqs[uid].abort();
//         }
//         delete this.reqs[uid];
//       });
//     }
//   };

//   post = ({ data, origin, action, parsedFile }) => {
//     const { onStart, customRequest, name, headers, withCredentials, method } = this.props;
//     const { onProgress, onSuccess, onError } = this.props;

//     const request = customRequest || defaultRequest;
//     const { uid } = origin;

//     const requestOption = {
//       action,
//       filename: name,
//       data,
//       file: parsedFile,
//       headers,
//       withCredentials,
//       method: method || 'post',
//       onProgress: (e) => {
//         onProgress && onProgress(e, parsedFile);
//       },
//       onSuccess: (ret, xhr) => {
//         onSuccess && onSuccess(ret, parsedFile, xhr);

//         delete this.reqs[uid];
//       },
//       onError: (err, ret) => {
//         onError && onError(err, ret, parsedFile);

//         delete this.reqs[uid];
//       },
//     };

//     onStart(origin);
//     this.reqs[uid] = request(requestOption);
//   };

//   processFile = async (file, fileList) => {
//     const { beforeUpload, action, data } = this.props;

//     let transformedFile = file;
//     if (beforeUpload) {
//       try {
//         transformedFile = await beforeUpload(file, fileList);
//       } catch (e) {
//         transformedFile = false;
//       }
//       if (transformedFile === false) {
//         return {
//           origin: file,
//           parsedFile: null,
//           action: null,
//           data: null,
//         };
//       }
//     }

//     let mergedAction;
//     if (typeof action === 'function') {
//       mergedAction = await action(file);
//     } else {
//       mergedAction = action;
//     }

//     let mergedData;
//     if (typeof data === 'function') {
//       mergedData = await data(file);
//     } else {
//       mergedData = data;
//     }

//     const parsedData =
//       (typeof transformedFile === 'object' || typeof transformedFile === 'string') &&
//       transformedFile
//         ? transformedFile
//         : file;

//     let parsedFile;
//     if (parsedData instanceof File) {
//       parsedFile = parsedData;
//     } else {
//       parsedFile = new File([parsedData], file.name, { type: file.type });
//     }

//     const mergedParsedFile = parsedFile;
//     mergedParsedFile.uid = file.uid;

//     return {
//       origin: file,
//       data: mergedData,
//       parsedFile: mergedParsedFile,
//       action: mergedAction,
//     };
//   };

//   uploadFiles = (files) => {
//     const originFiles = [...files];

//     const postFiles = originFiles.map((file) => {
//       file.uid = uuid();
//       return this.processFile(file, originFiles);
//     });

//     Promise.all(postFiles).then((fileList) => {
//       const { onBatchStart } = this.props;
//       if (onBatchStart) {
//         onBatchStart(fileList.map(({ origin, parsedFile }) => ({ file: origin, parsedFile })));
//       }

//       fileList
//         .filter((file) => file.parsedFile !== null)
//         .forEach((file) => {
//           this.post(file);
//         });
//     });
//   };

//   onFileChange = (e) => {
//     // const { files } = fileRef.current;
//     const { files } = e.target;
//     this.uploadFiles(files);
//     // 触发onchange
//     e.target.value = '';
//   };

//   onTriggerClick = () => {
//     this.fileInput.click();
//   };

//   saveFileInput = (node) => {
//     this.fileInput = node;
//   };

//   render() {
//     const { id, multiple } = this.props;

//     return (
//       <div className="upload-control" onClick={this.onTriggerClick}>
//         <input
//           id={id}
//           type="file"
//           accept="image/*"
//           multiple={multiple}
//           ref={this.saveFileInput}
//           style={{ display: 'none' }}
//           onClick={(e) => e.stopPropagation()}
//           onChange={this.onFileChange}
//         />
//         <i />
//       </div>
//     );
//   }
// }

// export default AjaxUpload;
