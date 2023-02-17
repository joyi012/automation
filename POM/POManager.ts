import AllRadioClass from './AllRadio';
import ApprovedRadioClass from './ApprovedRadio';
import DataRecievedDropdownClass from './DataRecievedDropdown';
import DataRecievedMenuItemClass from './DataRecievedMenuItem';
import FilterInSearchboxClass from './FilterInSearchbox';
import FirstSelectorCheckBoxClass from './FirstSelectorCheckBox';
import LoginPageClass from './LoginPage';
import LogOutPageClass  from './LogoutPage';
import NeedsFillingOutClass from './NeedsFillingOut';
import NeedSignatureClass from './NeedSignature';
import PatientMenuItemClass from './PatientMenuItem';
import PersonalClass from './Personal';
import SearchBoxClass from './SearchBoxPage';
import SelectAllSelectorClass from './SelectAllSelector';
import SenderMenuItemClass from './SenderMenuItem';
import SignerMenuItemClass from './SignerMenuItem';
import SortDirectionClass from './SortDirection';
import TeamClass from './Team';
import TypeInFilterHomeHealthClass from './TypeInFilterHomeHealth';
import TypeInFilterMedicalNecessityClass from './TypeInFilterMedicalNecessity';
import UnapprovedRadioClass from './UnapprovedRadio';


export default class  POManager
{

    page: any;
    loginpage: LoginPageClass;
    logoutpage: LogOutPageClass;
    searchboxPO: SearchBoxClass;
    filterInSearchboxPO: FilterInSearchboxClass;
    typeInFilterMedicalNecessityPO: TypeInFilterMedicalNecessityClass;
    TypeInFilterHomeHealthPO: TypeInFilterHomeHealthClass;
    PersonalPO: PersonalClass;
    TeamPO: TeamClass;
    AllRadioPO: AllRadioClass;
    ApprovedRadioPO: ApprovedRadioClass;
    UnapprovedRadioPO: UnapprovedRadioClass;
    needSignaturePO: NeedSignatureClass;
    NeedsFillingOutPO: NeedsFillingOutClass;
    SelectAllSelectorPO: SelectAllSelectorClass;
    DataRecievedDropdownPO: DataRecievedDropdownClass;
    DataRecievedMenuItemPO: DataRecievedMenuItemClass;
    PatientMenuItemPO: PatientMenuItemClass;
    SenderMenuItemPO: SenderMenuItemClass;
    SignerMenuItemPO: SignerMenuItemClass;
    SortDirectionPO: SortDirectionClass;
    FirstSelectorCheckBoxPO: FirstSelectorCheckBoxClass;
    
    constructor(page:any)
    {

        this.page=page;
        this.loginpage=new LoginPageClass(this.page);
        this.logoutpage=new LogOutPageClass(this.page);
        this.searchboxPO=new SearchBoxClass(this.page);
        this.filterInSearchboxPO=new FilterInSearchboxClass(this.page);
        this.typeInFilterMedicalNecessityPO=new TypeInFilterMedicalNecessityClass(this.page);
        this.TypeInFilterHomeHealthPO=new TypeInFilterHomeHealthClass(this.page);
        this.PersonalPO=new PersonalClass(this.page);
        this.TeamPO=new TeamClass(this.page);
        this.AllRadioPO=new AllRadioClass(this.page);
        this.ApprovedRadioPO=new ApprovedRadioClass(this.page);
        this.UnapprovedRadioPO=new UnapprovedRadioClass(this.page);
        this.needSignaturePO=new NeedSignatureClass(this.page);
        this.NeedsFillingOutPO=new NeedsFillingOutClass(this.page);
        this.SelectAllSelectorPO=new SelectAllSelectorClass(this.page);
        this.DataRecievedDropdownPO=new DataRecievedDropdownClass(this.page);
        this.DataRecievedMenuItemPO=new DataRecievedMenuItemClass(this.page);
        this.PatientMenuItemPO=new PatientMenuItemClass(this.page);
        this.SenderMenuItemPO=new SenderMenuItemClass(this.page);
        this.SignerMenuItemPO=new SignerMenuItemClass(this.page);
        this.SortDirectionPO=new SortDirectionClass(this.page);
        this.FirstSelectorCheckBoxPO=new FirstSelectorCheckBoxClass(this.page);
        
    } 

    getLoginPage()
    {
        return this.loginpage;
    }

    getLogOutPage()
    {
        return this.logoutpage;
    }

    getsearchbox()
    {
        return this.searchboxPO;
    }
    
    getFilterInSearchbox()
    {
        return this.filterInSearchboxPO;
    }
    
    getTypeInFilterMedicalNecessity()
    {
        return this.typeInFilterMedicalNecessityPO;
    }
    
    getTypeInFilterHomeHealth()
    {
        return this.TypeInFilterHomeHealthPO;
    }

    getPersonal()
    {
        return this.PersonalPO;
    }

    getTeam()
    {
        return this.TeamPO;
    }
    
    getAllRadio()
    {
        return this.AllRadioPO;
    }
    
    getApprovedRadio()
    {
        return this.ApprovedRadioPO;
    }
    
    getUnapprovedRadio()
    {
        return this.UnapprovedRadioPO;
    }

    getneedSignature()
    {
        return this.needSignaturePO;
    }

    getNeedsFillingOut()
    {
        return this.NeedsFillingOutPO;
    }

    getSelectAllSelector()
    {
        return this.SelectAllSelectorPO;
    }

    getDataRecievedDropdown()
    {
        return this.DataRecievedDropdownPO;
    }

    getDataRecievedMenuItem()
    {
        return this.DataRecievedMenuItemPO;
    }

    getPatientMenuItem()
    {
        return this.PatientMenuItemPO;
    }

    getSenderMenuItem()
    {
        return this.SenderMenuItemPO;
    }

    getSignerMenuItem()
    {
        return this.SignerMenuItemPO;
    }

    getSortDirection()
    {
        return this.SortDirectionPO;
    }

    getFirstSelectorCheckBox()
    {
        return this.FirstSelectorCheckBoxPO;
    }
}