// 'use client'

// import Image from "next/image"
// import { useState } from "react"
// import { Minus, Plus } from 'lucide-react'

// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"

// export default function ProductDetail() {
//   const [units, setUnits] = useState(198)
//   const [pallets, setPallets] = useState(1)

//   const originalPrice = 67320
//   const discountPercentage = 10
//   const discountedPrice = originalPrice - (originalPrice * discountPercentage / 100)

//   const handlePalletChange = (increment: number) => {
//     const newValue = pallets + increment
//     if (newValue >= 1) {
//       setPallets(newValue)
//       setUnits(newValue * 198) // 198 units per pallet
//     }
//   }

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <div className="grid gap-8 md:grid-cols-2">
//         {/* Product Image */}
//         <Card className="relative overflow-hidden bg-gray-100">
//           <Badge className="absolute left-4 top-4 z-10 bg-black text-white hover:bg-black/90">
//             BLACK AL COSTO
//           </Badge>
//           <div className="aspect-square">
//             <Image
//               src="/placeholder.svg"
//               alt="Ladrillo hueco"
//               width={500}
//               height={500}
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </Card>

//         {/* Product Details */}
//         <div className="space-y-6">
//           <div>
//             <div className="text-sm text-muted-foreground">SKU: 100012</div>
//             <h1 className="text-2xl font-bold">Ladrillo hueco 8cm x 18cm x 33cm (Pallet de 198u)</h1>
//             <div className="mt-2 flex items-center gap-2">
//               <Badge variant="secondary" className="bg-green-100 text-green-800">
//                 Stock disponible
//               </Badge>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <div className="flex items-baseline gap-2">
//               <span className="text-3xl font-bold">${discountedPrice.toLocaleString()}</span>
//               <Badge className="bg-blue-600">10% OFF</Badge>
//             </div>
//             <div className="text-sm text-muted-foreground">
//               <span className="line-through">${originalPrice.toLocaleString()}</span>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <div>
//               <label className="text-sm font-medium">Cantidad de unidades</label>
//               <div className="mt-1 flex items-center gap-4">
//                 <div className="w-32 rounded-md border px-3 py-2">
//                   {units}
//                 </div>
//                 <span className="text-sm text-muted-foreground">unidades</span>
//               </div>
//             </div>

//             <div>
//               <label className="text-sm font-medium">Cantidad de pallets</label>
//               <div className="mt-1 flex items-center gap-4">
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={() => handlePalletChange(-1)}
//                   disabled={pallets <= 1}
//                 >
//                   <Minus className="h-4 w-4" />
//                 </Button>
//                 <div className="w-16 text-center">{pallets}</div>
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={() => handlePalletChange(1)}
//                 >
//                   <Plus className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           </div>

//           <div className="text-sm text-muted-foreground">
//             Ladrillo hueco 8cm x 18cm x 33cm - Pallet: 198 unidades
//           </div>

//           <div className="space-y-3">
//             <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
//               Comprar ahora
//             </Button>
//             <Button className="w-full" variant="outline" size="lg">
//               Eliminar del carrito
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

