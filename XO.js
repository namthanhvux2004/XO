const s=[0, 0, 0, 0, 0, 0, 0, 0, 0];
const id=["Zone1","Zone2","Zone3","Zone4","Zone5","Zone6","Zone7","Zone8","Zone9"];
var turn = 0;
function Move(i)
    {
            s[i]++;
            if (s[i]==1)
            {
                turn++;
                let tmp =  document.getElementById(id[i]);
                if (turn%2==0) tmp.innerHTML = 'X';
                else tmp.innerHTML = 'O';
            }
    }
