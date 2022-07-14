
local Material = loadstring(game:HttpGet("https://raw.githubusercontent.com/Kinlei/MaterialLua/master/Module.lua"))()

local X = Material.Load({
    Title = "Nuclear Bomb Testing GUI",
    Style = 3,
    SizeX = 500,
    SizeY = 350,
    Theme = "Light",
    ColorOverrides = {
        MainFrame = Color3.fromRGB(235,235,235)
    }
})

local Y = X.New({
    Title = "Scripts"


})

local Z = X.New({
    Title = "Settings"
    
})

local Z = X.New({
    Title = "Credits"
})


local D = Y.Button({
    Text = "Expert",
    Callback = function(Value)
        local args = {
            [1] = "Expert"
        }
        
        game:GetService("ReplicatedStorage").ChangeRank:FireServer(unpack(args))
        
            end, 
        })

        local D = Y.Button({
            Text = "Master",
            Callback = function(Value)
                local args = {
                    [1] = "Master"
                }
                
                game:GetService("ReplicatedStorage").ChangeRank:FireServer(unpack(args))
                
                    end, })
                    
        local D = Y.Button({
            Text = "True GrandMaster",
            Callback = function(Value)
                local args = {
                    [1] = "True GrandMaster"
                }
                
                game:GetService("ReplicatedStorage").ChangeRank:FireServer(unpack(args))
                
                    end, })

        local D = Y.Button({
            Text = "Legendary",
            Callback = function(Value)
                local args = {
                    [1] = "Legendary"
                }
                
                game:GetService("ReplicatedStorage").ChangeRank:FireServer(unpack(args))
                
                    end, })

                    
        local D = Y.Button({
            Text = "Chosen",
            Callback = function(Value)
                local args = {
                    [1] = "Chosen"
                }
                
                game:GetService("ReplicatedStorage").ChangeRank:FireServer(unpack(args))
                
                    end, })

                    
        local D = Y.Button({
            Text = "Ultimate",
            Callback = function(Value)
                local args = {
                    [1] = "Ultimate"
                }
                
                game:GetService("ReplicatedStorage").ChangeRank:FireServer(unpack(args))
                
                    end, })
            

local G = Y.ColorPicker({
    Text = "ESP Colour",
    Default = Color3.fromRGB(0,255,110),
    Callback = function(Value)
        print("RGB:", Value.R * 255, Value.G * 255, Value.B * 255)

    ColorOverrides = {
        MainFrame = Color3.fromRGB()
    }

    end,
    Menu = {
        Information = function(self)
            X.Banner({
                Text = "This changes the color of your ESP."
            })
        end
    }
})
