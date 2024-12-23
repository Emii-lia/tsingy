import {HttpClient} from "@/lib/http.client";
import {ENDPOINT} from "@/_constant/endpoint";
import {CreateSpeciesDto, SpecieType} from "@/_type/species.dto";

class SpeciesService {
    public getSpecies(){
        return HttpClient.get(ENDPOINT.SPECIES)
    }
    public createSpecies(species:CreateSpeciesDto){
        return HttpClient.post(`${ENDPOINT.SPECIES}/create`,species)
    }
    public getSpeciesByType(type:SpecieType){
        return HttpClient.get(`${ENDPOINT.SPECIES}/type?q=${type}`)
    }
}

export const speciesService = new SpeciesService()