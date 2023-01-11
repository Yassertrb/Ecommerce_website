import mongoose from "mongoose";


const orderSchema = mongoose.Schema({

    user: {
        // hon 3ama n2oul eno houwe 3ibara 3an shi jeybino men schema tene
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },

    orderItems: [
        {

            name: {
                type: String,
                required: true,
            },

            qty: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },


            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
        }

    ],

    shippingAdress: {
        address: {
            type: String,
            required: true,
        },

        city: {
            type: Number,
            required: true,
        },
        postalCode: {
            type: String,
            required: true,
        },
        country: {
            type: Number,
            required: true,
        },
    },

    paymentMethod: {
        type: String,
        required: true,
    },

    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email: { type: String },

    },


    category: {
        type: String,
        required: true,
    },

    taxPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },

    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },



    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },

    paidAt: {
        type: Date,

    },

    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },



    DeliveredAt: {
        type: Date,

    },


},

    {
        timestamps: true,
    }

)

const Order = mongoose.model('Order', orderSchema)
export default Order