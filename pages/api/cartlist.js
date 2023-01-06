// import fs from 'fs';
// import path from 'path';

// function handler(req, res) {
//     if (req.method === 'POST') {
//         const name = req.body.name;
//         const id_product = req.body.id_product;
//         const id = req.body.id;
//         const size = req.body.size;
//         const quanlity = req.body.quanlity;
//         const price = req.body.price;
//         const image = req.body.image;

//         const productList = {
//             name: name,
//             id_product: id_product,
//             id: id,
//             size: size,
//             quanlity: quanlity,
//             price: price,
//             image: image,
//         };
//         // res.status(201).json({ message: 'test APT router' });
//         //store that in database or file
//         const filePath = path.join(process.cwd(), 'data', 'cartlist');
//         const fileData = fs.readFileSync(filePath);
//         const data = JSON.parse(fileData);
//         data.push(productList);
//         fs.writeFileSync(filePath, JSON.stringify(data))
//         res.status(201).join({message:'Success', productList:productList})
//     } else{
//       res.status(200).json({message:'test'});

//     }
//     // if (req.method === 'GET') {
//     //     res.status(200).json({ productList });
//     // }
// }
// export default handler;
