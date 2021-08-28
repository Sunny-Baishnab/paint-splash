AFRAME.registerComponent('wire-fence',{
    init:function(){
        var posX = -20
        var posZ = 65
        for(var i = 0;i<10;i++){
            var wireFence1 = document.createElement('a-entity')
            var wireFence2 = document.createElement('a-entity')
            var wireFence3 = document.createElement('a-entity')
            var wireFence4 = document.createElement('a-entity')
            posX = posX+5
            posY = 2.5
            posZ = posZ-10
            var scale = {x:2,y:2,z:2}
            wireFence1.setAttribute('id','wireFence1'+i)
            wireFence2.setAttribute('id','wireFence2'+i)
            wireFence3.setAttribute('id','wireFence3'+i)
            wireFence4.setAttribute('id','wireFence4'+i)

            wireFence1.setAttribute('position',{
                x:posX,y:posY,z:-20
            })
            wireFence2.setAttribute('position',{
                x:posX,y:posY,z:30
            })

            wireFence1.setAttribute('scale',scale)
            wireFence2.setAttribute('scale',scale)

            wireFence1.setAttribute('gltf-model','./assets/barbed_wire_fence/scene.gltf')
            wireFence2.setAttribute('gltf-model','./assets/barbed_wire_fence/scene.gltf')

            wireFence1.setAttribute('static-body',{})
            wireFence2.setAttribute('static-body',{})

            var scene = document.querySelector('#scene')
            scene.appendChild(wireFence1)
            scene.appendChild(wireFence2)
        }
    }
})